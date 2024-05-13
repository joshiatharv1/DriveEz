import './App.css';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import NotFound from './components/Error/notFound.tsx';
import LandingPage from './components/LandingPageSection/landingPage.tsx';
import Dashboard from './components/AdminComponents/admin-dashboard.tsx';
import { startTransition } from 'react';
import Map from './components/map.tsx';
import AdminBase from './components/AdminComponents/adminBase.tsx';
import Userhome from './components/UserComponents/userhome.tsx';


export const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  }

  // If the user is not authenticated, navigate to the landing page
  return <Navigate to="/landingpage" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Userhome /></ProtectedRoute>,
  },
  {
    path: "/user",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/booking/:carid",
    element: <ProtectedRoute><BookingCar /></ProtectedRoute>,
    loader: ({ params }) => {
      return params.carid;
    }
  },
  {
    path: "/userbookings",
    element: <ProtectedRoute><UserBookings /></ProtectedRoute>
  },
  {
    path: "/addcar",
    element: <ProtectedRoute><AddCar /></ProtectedRoute>
  },
  {
    path: "/editcar/:carid",
    element: <ProtectedRoute><EditCar /></ProtectedRoute>,
    loader: ({ params }) => {
      return params.carid;
    }
  },
  {
    path: "/admin",
    element: <ProtectedRoute><AdminHome /></ProtectedRoute>
  },
  {
    path: "/admin/home",
    element: <ProtectedRoute><AdminBase /></ProtectedRoute>
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/admin/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/map",
    element: <ProtectedRoute><Map /></ProtectedRoute>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
