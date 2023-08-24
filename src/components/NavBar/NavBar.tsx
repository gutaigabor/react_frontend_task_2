import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  /* ----- Initialize ----- */
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      path: '/',
      text: 'Home'
    },
    {
      path: '/movies',
      text: 'Movies'
    }
  ];

  /* ----- Setup state ----- */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | undefined>();

  /* ----- Setup subscriptions */
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  /* ----- Functions ----- */
  const navigateToPage = (path: string) => {
    navigate(path);
  }

  const getActiveClass = (path: string) => {
    if (path === activeItem) {
      return "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer";
    } else {
      return "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
    }
  }

  /* ----- Render ----- */
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto px-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex">
                { items.map((item, index) => {
                  return (
                    <div onClick={() => navigateToPage(item.path)} key={index} className={getActiveClass(item.path)}>{item.text}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      { isOpen &&
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            { items.map((item, index) => {
              return (
                <div onClick={() => navigateToPage(item.path)} key={index} className={getActiveClass(item.path)}>{item.text}</div>
              )
            })}
          </div>
        </div>
      }
    </nav>
  )
}