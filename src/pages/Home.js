import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.userSlice)?.currentUser?.token;
  if (token == undefined || token == null) {
    window.location.reload();
  }
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;
