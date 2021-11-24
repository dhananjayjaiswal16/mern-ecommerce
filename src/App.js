import React from 'react'

import { Link, Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'


import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  const user = false;

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login'
          element={!user ? <Login /> : <Navigate to="/" />} />
        <Route exact path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/product/:id' element={<SingleProduct />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App;
