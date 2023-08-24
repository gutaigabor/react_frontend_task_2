import { Movie } from "../../interfaces/Movie";
import Button from "../Button";

interface MovieItemStateState {
  movie: Movie;
  onViewClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const MovieItem = (props: MovieItemStateState) => {
  /* ----- Initialize ----- */
  const { movie, onViewClick, onEditClick, onDeleteClick } = props;

  /* ----- Render ----- */
  return (
    <div className="grid grid-rows-5 m-2 my-6 min-w-64 w-cell h-80 transition ease-in-out delay-15 bg-zinc-700 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-30">
      <div className="row-span-4 cursor-default p-4">
        <div className="text-2xl line-clamp-2 mb-4 text-teal-500 font-bold">{movie.name}</div>
        <div className="text-sm">Description:</div>
        <div className="text-sm line-clamp-4 mb-6">{movie.description}</div>
        <div>Age: {movie.age}+</div>
      </div>
      <div className="row-span-1 flex items-end justify-center p-2">
        {
          onViewClick &&
          <Button text="View" onClick={onViewClick}/>
        }
        {
          onEditClick &&
          <Button text="Edit" onClick={onEditClick}/>
        }
        {
          onDeleteClick &&
          <Button text="Delete" onClick={onDeleteClick}/>
        }
      </div>
    </div>
  )
}