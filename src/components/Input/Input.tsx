interface InputState {
  value: string | number | undefined;
  type: string;
  label?: string;
  placeholder?: string;
  onChange: (event: any) => void;
}

export const Input = (props: InputState) => {
  /* ----- Initialize ----- */
  const { label, value, type, placeholder, onChange } = props;

  /* ----- Render ----- */
  return (
    <div className="md:flex md:items-center mb-6 mx-2">
      { label &&
        <div className="md:w-36">
          <label className="block text-zinc-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            { label }
          </label>
        </div>
      }
      <div className={type === 'number' ? 'w-24' : 'lg:w-80 xl:w-96'}>
        {
          type === 'textarea' ?
            <textarea
              value={value}
              onChange={onChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              id="inline-full-name"
              placeholder={placeholder}
            />
          :
            <input
              value={value || value === 0 ? value : ''}
              onChange={onChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              id="inline-full-name"
              type={type}
              placeholder={placeholder}
              min={type === 'number' ? 0 : undefined}
              max={type === 'number' ? 18 : undefined}
            />
        }
        
      </div>
    </div>
  )
}