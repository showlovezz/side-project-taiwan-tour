import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import routes from '../../routes'

const RouterView = () => {
  return (
    <Suspense fallback='Loading ...'>
      <Routes>
        {routes.map((route, index) => {
          if (!route.element) return null

          return <Route key={index} path={route.path} element={route.element} />
        })}
      </Routes>
    </Suspense>
  )
}

export default RouterView
