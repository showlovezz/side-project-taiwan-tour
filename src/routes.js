import React from 'react'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const ToursPage = React.lazy(() => import('./pages/ToursPage'))
const ActivitiesPage = React.lazy(() => import('./pages/ActivitiesPage'))
const RestaurantsPage = React.lazy(() => import('./pages/RestaurantsPage'))
const HotelsPage = React.lazy(() => import('./pages/HotelsPage'))

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/taiwan-tours',
    element: <ToursPage />,
  },
  {
    path: '/taiwan-activities',
    element: <ActivitiesPage />,
  },
  {
    path: '/taiwan-restaurants',
    element: <RestaurantsPage />,
  },
  {
    path: '/taiwan-hotels',
    element: <HotelsPage />,
  },
]

export default routes
