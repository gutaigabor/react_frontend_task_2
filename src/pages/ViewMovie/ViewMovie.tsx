import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Movie } from "../../interfaces/Movie";

export const ViewMoviePage = () => {
  /* ----- Initialize ----- */
  const { id } = useParams();
  const movies = useSelector<RootState, Array<Movie> | undefined>(state => state.movie.movies);

  /* ----- Setup state ----- */
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  /* ----- Setup subscriptions */
  useEffect(() => {
    const currentMovie: Movie | undefined = movies && movies.find(mov => mov._id === id);

    setMovie(currentMovie);
  }, [movies]);

  /* ----- Render ----- */
  return (
    <div className="w-custom-sm md:w-custom-md lg:w-custom-lg xl:w-custom-xl mx-auto p-6 my-4 border-4 border-white">
      { movie && 
        <>
          <div className="text-2xl mb-4 text-teal-500 font-bold">{movie.name}</div>
          <div className="text-sm">Description</div>
          <div className="text-sm mb-6">{movie.description}</div>
          <div>Age: {movie.age}+</div>
        </>
      }
      
    </div>
  )
}