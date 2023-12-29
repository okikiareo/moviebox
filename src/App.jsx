import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/movie"
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
          <Route index element={<Home />} />  
          <Route path ="/pages/movies/:id" element={<Movie/>} />
      </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;