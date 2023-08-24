import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import { setMovies, useGetMoviesQuery } from "../../reducers/movie";

export const Main = () => {
  /* ----- Initialize ----- */
  const dispatch = useDispatch();
  const { data, error } = useGetMoviesQuery();

  /* ----- Setup subscriptions */
  useEffect(() => {
    dispatch(setMovies(data));
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  /* ----- Render ----- */
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  )
}