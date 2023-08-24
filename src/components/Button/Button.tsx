interface ButtonState {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

export const Button = (props: ButtonState) => {
  /* ----- Initialize ----- */
  const { text, type, disabled, onClick } = props;

  /* ----- Render ----- */
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`text-sm px-4 py-2 leading-none border rounded m-1 ${!disabled ? 'cursor-pointer text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white' : 'text-slate-500 border-slate-500'}`}
    >
      { text }
    </button>
  )
}