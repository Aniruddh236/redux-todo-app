import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './components/Dashboard.jsx'

import './App.css';
import HeaderLayout from './components/Navigation/HeaderLayout';
import Layout from './components/Layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout><Layout /></HeaderLayout>
  },
  {
    path:"/dashboard",
    element:<HeaderLayout><Dashboard/></HeaderLayout>
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
