import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Routes, Route , BrowserRouter, Navigate } from 'react-router-dom'
import Login from './components/Login';
import AdminPanel from './components/Admin/AdminPanel';
import AddButton from './components/AddButton';
import TopNav from './components/Admin/TopNav';
import {MemberProvider} from './context/MemberContext'

function App() {
   
  return (
  
 <MemberProvider>
   <BrowserRouter>
  <TopNav />
  <Routes>
  <Route path='/' element={<Login />}/> 
  <Route path='/dashboard' element={<AdminPanel />}/> 
  <Route path='/members' element={<AdminPanel />}/> 
  <Route path='/compose/new_member' element={<AdminPanel />}/> 
  <Route path='*' element={<Navigate to='/' />}/> 
  </Routes>

  <AddButton />
  </BrowserRouter>
 </MemberProvider>
 
  );
}

export default App;
