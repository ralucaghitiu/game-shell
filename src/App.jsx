import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FourOhFour, Home, Play, Profile, Ranks } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/play',
    element: <Play></Play>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },
  {
    path: '/ranks',
    element: <Ranks></Ranks>,
  },
  {
    path: '*',
    element: <FourOhFour></FourOhFour>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
