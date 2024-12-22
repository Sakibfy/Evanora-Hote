import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

// import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right' reverseOrder={false} />
      </AuthProvider>
  </React.StrictMode>
)