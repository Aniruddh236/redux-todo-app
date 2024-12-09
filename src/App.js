import React, { Suspense } from 'react';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
// import Dashboard from './components/Dashboard.jsx'

import './App.css';
import HeaderLayout from './components/Navigation/HeaderLayout';
import Layout from './components/Layout';
import MemoizedDashboard from './components/Dashboard.jsx';


const Dashboard = React.lazy(() => import('./components/Dashboard'));

const AppLayout = () => (
  <HeaderLayout>
    <Outlet />
  </HeaderLayout>
);

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Layout /> },
      {
        path: "/dashboard", element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard /></Suspense>
        )
      },
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
