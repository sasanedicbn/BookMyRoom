import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Content from './Home/Content';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for Toastify
import Settings from './Settings/Settings';
import SideBar from './sharedLayout/SideBar';
import Users from './Home/Users/Users';
import Login from './Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: '/',
        element: <Navigate to="/rooms" replace />,
      },
      {
        path: '/rooms',
        element: <Content />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {path: 'users',
        element:<Users/>
      }
    ],
  },
  {
    path:'/login',
    element: <Login  />,
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}

export default App;
