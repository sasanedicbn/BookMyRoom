import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Content from './Home/Content';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { FaBed, FaHotel, FaCalendarCheck, FaUsers, FaCog } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Settings from './Settings/Settings';
import SideBar from './sharedLayout/SideBar';
import ContentNavBar from './Home/ContentNavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/rooms" replace />,
      },
      {
        path: '/rooms',
        element: <Content />,
      },{
        path: 'settings',
        element:<Settings/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

