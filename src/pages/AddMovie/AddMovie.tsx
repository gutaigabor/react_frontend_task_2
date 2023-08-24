/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input"
import Button from "../../components/Button";
import { useAddMovieMutation, useGetMoviesQuery } from "../../reducers/movie";


export const AddMoviePage = () => {
  /* ----- Initialize ----- */
  const navigate = useNavigate();
  const { refetch } = useGetMoviesQuery();
  const [ addMovieRequest ] = useAddMovieMutation();

  /* ----- Setup state ----- */
  const [name, setNameState] = useState<string>('');
  const [description, setDescriptionState] = useState<string>('');
  const [age, setAgeState] = useState<number>(0);

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

  const addMovie = async (e: any) => {
    e.preventDefault();

    await addMovieRequest(
      {
        name: name,
        description: description,
        age: age
      }
    )

    await refetch();

    navigate('/movies');
  }

  const validate = () => {
    return !!name && !!description && age >= 0;
  }

  /* ----- Render ----- */
  return (
    <form onSubmit={addMovie} className="w-auto m-4">
      <Input label="Movie Name" value={name} type="text" onChange={setName}/>
      <Input label="Movie Description" value={description} type="textarea" onChange={setDescription}/>
      <Input label="Age Restriction" value={age} type="number" onChange={setAge}/>
      <div className="flex justify-center">
        <Button text="Add" type="submit" disabled={!validate()}/>
      </div>
    </form>
  )
}