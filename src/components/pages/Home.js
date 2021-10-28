import React from 'react'
import Announcement from '../Announcement';
import Categories from '../Categories';
import Navbar from '../Navbar'
import Products from '../Products';
import Slider from '../Slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home;
