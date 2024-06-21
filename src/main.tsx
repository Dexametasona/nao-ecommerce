import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ROUTES } from './router/Router'
import { Provider } from 'react-redux'
import { authStore } from './contexts/authStore'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={authStore}>
      <RouterProvider router={ROUTES}/>
    </Provider>
  </React.StrictMode>,
)
