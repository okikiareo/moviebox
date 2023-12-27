import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
          <Route index element={<Home />} />
      </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;