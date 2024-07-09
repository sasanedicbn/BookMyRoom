import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from './sharedLayout/SideBar';


const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;