import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from './sharedLayout/SideBar';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { store } from './store/store';


const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
  },
]);

function App() {
  return (
    <ApiProvider store={store}>
     <RouterProvider router={router} />
    </ApiProvider>
  );
}

export default App;