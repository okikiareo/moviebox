import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/movie";
import NotFound from "./pages/NotFound";
import MovieLayout from "./layout/MovieLayout";
// import MovieFooter from "./layout/FooterLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound />}>
      <Route index element={<Home />} />

      <Route element={<MovieLayout />}>
        <Route index path="/pages/movies/:id" element={<Movie />} />
        <Route path="/pages/tvseries" element={"Tv series"} />
        <Route path="/pages/upcoming" element={"Upcoming"} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;