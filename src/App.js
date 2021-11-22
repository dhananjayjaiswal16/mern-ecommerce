import React from 'react'

import { Link, Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'


import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home'
import ProductList from './components/pages/ProductList';
import SingleProduct from './components/pages/SingleProduct';

const App = () => {
  const user = true;

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
