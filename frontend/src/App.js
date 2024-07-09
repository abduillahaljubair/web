import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {Login, SignupPage,HomePage} from "./Routes.js";
import { useAuthStore} from './store/AuthStore.js'
import "./App.css"

const App = () => {
  const { token } = useAuthStore();
  console.log('token:',token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/login' element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/dashboard' element={token ? <HomePage />: <Login />} />
        <Route path='/sign-up' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
