import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <main className='min-h-[calc(100vh-285px)]'></main>
            <Footer/>
        </div>
    );
};

export default Home;