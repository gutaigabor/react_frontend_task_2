import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieItem from "../../components/MovieItem";
import { Movie } from "../../interfaces/Movie";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { RootState } from "../../store";
import { useDeleteMovieMutation, useGetMoviesQuery } from "../../reducers/movie";

export const MoviesPage = () => {
    /* ----- Initialize ----- */
    const navigate = useNavigate();
    const { refetch } = useGetMoviesQuery();
    const movies = useSelector<RootState, Array<Movie> | undefined>(state => state.movie.movies);
    const [ deleteMovie ] = useDeleteMovieMutation();

    /* ----- Setup state ----- */
    const [searchField, setSearchFieldState] = useState<string>('');
    const [filteredMovies, setFilteredMovies] = useState<Array<Movie> | undefined>([]);
    const [fromAge, setFromAgeState] = useState<number | undefined>(undefined);
    const [toAge, setToAgeState] = useState<number | undefined>(undefined);

    /* ----- Setup subscriptions */
    useEffect(() => {
      setFilteredMovies(movies);
    }, [movies]);

    useEffect(() => {
      setFilteredMovies(movies?.filter(movie => {
        return (
          (!fromAge || Number(fromAge) <= movie.age) && (!toAge || Number(toAge) >= movie.age) &&
          (
            movie.name.toLowerCase().includes(searchField.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchField.toLowerCase())
          )
        );
      }));
    }, [fromAge, toAge, searchField]);

    /* ----- Functions ----- */
    const onViewClick = (id?: string) => {
      if (!id) {
        return;
      }
      navigate(`/view-movie/${id}`);
    }

    const onEditClick = (id?: string) => {
      if (!id) {
        return;
      }
      navigate(`/edit-movie/${id}`);
    }

    const onDeleteClick = async (id?: string) => {
      if (!id) {
        return;
      }
      await deleteMovie(id);
      await refetch();
    }

    const addMovie = () => {
      navigate('/add-movie');
    }

    const setSearchField = (e: any) => {
      setSearchFieldState(e.target.value);
    }

    const setFromAge = (e: any) => {
      setFromAgeState(e.target.value);
    }

    const setToAge = (e: any) => {
      setToAgeState(e.target.value);
    }

    /* ----- Render ----- */
    return (
      <div className="p-6">
        <div className="flex justify-center m-2">
          <Input type="text" value={searchField} onChange={setSearchField} placeholder="Search"/>
        </div>
        <div className="flex justify-center m-2">
          Age restriction
        </div>
        <div className="flex justify-center m-2">
          <Input type="number" value={fromAge} onChange={setFromAge} placeholder="From"/>
          <Input type="number" value={toAge} onChange={setToAge} placeholder="To"/>
        </div>
        <div className="flex justify-center m-2">
          <Button text="+" onClick={() => addMovie()}/>
        </div>
        <div className="flex flex-wrap justify-normal w-custom-sm md:w-custom-md lg:w-custom-lg xl:w-custom-xl m-auto">
          {
            filteredMovies && filteredMovies.length > 0 ?
              filteredMovies.map((movie, index) => {
                return (
                  <MovieItem
                    key={index}
                    movie={movie}
                    onViewClick={() => {onViewClick(movie._id)}}
                    onEditClick={() => {onEditClick(movie._id)}}
                    onDeleteClick={() => {void onDeleteClick(movie._id)}}
                  />
                );
              })
            :
              <div>No movies found</div>
          }
        </div>
      </div>
      
    )
  }