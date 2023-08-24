import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../interfaces/Movie';
import baseApi from '../api';

export type MovieState = {
  movies?: Array<Movie>
};

const initialState : MovieState = {
  movies: []
};

const slice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (
      state,
      { payload: movies }: PayloadAction<Array<Movie> | undefined>
    ) => {
      state.movies = movies;
    },
    addMovie: (
      state,
      { payload: movie }: PayloadAction<Movie>
    ) => {
      state.movies = state.movies ? [...state.movies, movie] : [movie];
    },
  }
});

const auth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<Array<Movie>, void>({
      query: () => 'movies',
    }),
    addMovie: builder.mutation<any, Movie>({
      query: (movie) => ({
        url: '/movies',
        method: 'POST',
        body: movie,
      }),
    }),
    updateMovie: builder.mutation<any, Movie>({
      query: ({ _id, ...restOfMovie }) => ({
        url: `/movies/${_id ?_id : ''}`,
        method: 'PUT',
        body: restOfMovie,
      }),
    }),
    deleteMovie: builder.mutation<any, string>({
      query: (id) => ({
        url: `/movies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMoviesQuery,
  useAddMovieMutation,
  useUpdateMovieMutation,
  useDeleteMovieMutation
} = auth;

export const { setMovies, addMovie } = slice.actions;

export default slice.reducer;
