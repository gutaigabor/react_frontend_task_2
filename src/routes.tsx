import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ErrorPage from "./pages/Error";
import EditMovie from "./pages/EditMovie";
import Main from "./containers/Main";
import ViewMovie from './pages/ViewMovie';
import AddMovie from './pages/AddMovie';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="edit-movie/:id" element={<EditMovie />} />
          <Route path="view-movie/:id" element={<ViewMovie />} />
          <Route path="add-movie" element={<AddMovie />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}