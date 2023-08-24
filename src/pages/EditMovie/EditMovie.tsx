/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input"
import Button from "../../components/Button";
import { useUpdateMovieMutation, useGetMoviesQuery } from "../../reducers/movie";
import { Movie } from "../../interfaces/Movie";
import { RootState } from "../../store";

export const EditMoviePage = () => {
  /* ----- Initialize ----- */
  const { id } = useParams();
  const navigate = useNavigate();
  const { refetch } = useGetMoviesQuery();
  const [ updateMovieRequest ] = useUpdateMovieMutation();
  const movies = useSelector<RootState, Array<Movie> | undefined>(state => state.movie.movies);

  /* ----- Setup state ----- */
  const [name, setNameState] = useState<string>('');
  const [description, setDescriptionState] = useState<string>('');
  const [age, setAgeState] = useState<number>(0);

  /* ----- Setup subscriptions */
  useEffect(() => {
    const currentMovie: Movie | undefined = movies && movies.find(mov => mov._id === id);

    if (currentMovie) {
      setNameState(currentMovie?.name);
      setDescriptionState(currentMovie?.description);
      setAgeState(currentMovie?.age);
    }
  }, [movies]);

  /* ----- Functions ----- */
  const setName = (e: any) => {
    setNameState(e.target.value);
  }

  const setDescription = (e: any) => {
    setDescriptionState(e.target.value)
  }

  const setAge = (e: any) => {
    setAgeState(e.target.value)
  }

  const addMovie = async (e: any) =>{
    e.preventDefault();

    await updateMovieRequest(
      {
        _id: id,
        name: name,
        description: description,
        age: age
      }
    )

    await refetch();

    navigate('/movies');
  }

  /* ----- Render ----- */
  return (
    <form onSubmit={addMovie} className="w-auto m-4">
      <Input label="Movie Name" value={name} type="text" onChange={setName}/>
      <Input label="Movie Description" value={description} type="textarea" onChange={setDescription}/>
      <Input label="Age Restriction" value={age} type="number" onChange={setAge}/>
      <div className="flex justify-center">
        <Button text="Update" type="submit"/>
      </div>
    </form>
  )
}