import React from 'react';
import Play from '../assets/play.png'
import App from '../assets/app.png'
import Hero from '../assets/hero.png'
const Banner = () => {
    return (
        <>
            <div>
                <h1 className='text-5xl text-center font-bold mb-5 mt-15'>We Build <br />
                    <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-center mb-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-10 mb-5'>
                    <button className="btn btn-dash btn-success p-2"> <img src={Play} alt="" />Google Play</button>
                    <button className="btn btn-dash btn-success p-2"><img src={App} alt="" /> App Store</button>
                </div>
                <img className='mx-auto' src={Hero} alt="" />

                {/* Base section */}
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-8'>
                    <h1 className='text-center my-10 text-4xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around mb-10'>
                    <div className='text-center '>
                        <h3 className='mb-5'>Total Download</h3>
                        <span className='text-7xl font-bold'>29.6M</span>
                        <p className='mt-5'>21% more than last month</p>
                    </div>
                    <div className='text-center '>
                        <h3 className='mb-5'>Total Reviews</h3>
                        <span className='text-7xl font-bold'>906K</span>
                        <p className='mt-5'>46% more than last month</p>
                    </div>
                    <div className='text-center '>
                        <h3 className='mb-5'>Active Apps</h3>
                        <span className='text-7xl font-bold'>132+</span>
                        <p className='mt-5'>31 more will Launch</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Banner;