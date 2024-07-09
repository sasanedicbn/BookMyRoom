import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from './sharedLayout/SideBar';
import Content from './Home/Content';
import { store } from './store/store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [{
      path:'/',
      element: <Content/>
    }]
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