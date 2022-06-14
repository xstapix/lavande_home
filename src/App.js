import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from './components/Layout'
import { AdminLayout } from './components/AdminLayout'
import {Room} from './components/Room'
import ScrollToTop from './components/ScrollToTop'

import {Home} from './pages/Home'
import {Contacts} from './pages/Contacts'
import {Reviews} from './pages/Reviews'
import {AdminHome} from './pages/AdminHome'
import { AdminReviews } from './pages/AdminReviews'
import { AdminBooking } from './pages/AdminBooking'
import { AdminRooms } from './pages/AdminRooms'
import { Login } from './pages/Login'

import {RequireAuth} from './hoc/RequireAuth'
import {AuthProvider} from './hoc/Authprovider'

function App() {

  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="room/:id" element={<Room/>}/>
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={
              <RequireAuth>
                <AdminHome/>
              </RequireAuth>
            }/>
            <Route path="adminReviews" element={
              <RequireAuth>
                <AdminReviews />
              </RequireAuth>
            }/>
            <Route path="adminBooking" element={
              <RequireAuth>
                <AdminBooking />
              </RequireAuth>
            }/>
            <Route path="adminRooms" element={
              <RequireAuth>
                <AdminRooms />
              </RequireAuth>
            }/>
          </Route>
          <Route path="login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;
