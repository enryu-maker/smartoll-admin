import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Admin/AdminLogin'
import Fill from './pages/Worker/Fill'
import SDashboard from './pages/Station/Dashboard'

export default function App() {
  return (
    <Routes>
      {/* Admin paths */}
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path='/admin-dashboard' element={<SDashboard />} />
    </Routes>
  )
}
