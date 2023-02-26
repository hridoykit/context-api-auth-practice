
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './layout/Main';
import PrivateRoute from './routes/private/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/dashboard',
          element: <PrivateRoute> <Dashboard /> </PrivateRoute>
        },
        {
          path: '/signin',
          element: <SignIn /> 
        },
        {
          path: '/signup',
          element: <SignUp />
        },
      ]
    }
  ]);

    return (
      <div className="App">
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
