import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button'

export const HomePage = () => {
  /* ----- Initialize ----- */
  const navigate = useNavigate();

  /* ----- Render ----- */
  return (
    <>
      <div className="text-5xl h-64 max-w-full flex items-center justify-center text-center">
        Welcome to Movie Catalog!
      </div>
      <div className="h-10 max-w-full flex items-center justify-center">
        <Button text="Movies" onClick={() => navigate('/movies')}/>
      </div>
    </>
  )
}