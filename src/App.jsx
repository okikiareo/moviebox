import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
          <Route index element={<Index />} />
          
          {/* <Route element={<StepLayout />}>
             
          </Route> */}
      </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;