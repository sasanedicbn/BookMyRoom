import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Content from './Pages/Room/Content';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import SideBar from './UX/sharedLayout/SideBar';
import Users from './Pages/Users/Users';
import Login from './Login/Login';
import Bookings from './Pages/Bookings/Bookings';
import Settings from './Pages/Settings/Settings';
import SeeDetails from './Pages/Options/SeeDetails';
import CheckIn from './Pages/Options/optionsHelpers/CheckIn';
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
      { 
        path: 'users',
        element: <Users />
      },
      { 
        path: 'booking',
        element: <Bookings />,
      },
      { 
        path: 'booking/:id',  
        element: <SeeDetails />
      },
      {path:'check-in/:id',
        element:<CheckIn/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
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
