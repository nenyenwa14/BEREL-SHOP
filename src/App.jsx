import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import { Product } from './pages/Product';
import { Page } from './pages/Page';
import {MyAccount} from './pages/MyAccount'
import {Cart} from './pages/Cart'

function App() {
 

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/pages' element={<Page/>}/>
        <Route path='/MyAccount' element={<MyAccount/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App

