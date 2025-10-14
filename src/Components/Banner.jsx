import React from 'react';
import Play from '../assets/play.png'
import App  from '../assets/app.png'
import Hero from '../assets/hero.png'
const Banner = () => {
    return (
        <>
            <div>
                <h1 className='text-5xl text-center font-bold mb-5'>We Build <br />
                    <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-center mb-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-10 mb-5'>
                    <button className="btn btn-dash btn-success p-2"> <img src={Play} alt="" />Google Play</button>
                    <button className="btn btn-dash btn-success p-2"><img src={App} alt="" /> App Store</button>
                </div>
                <img className='mx-auto my-8' src={Hero} alt="" />
            </div>
        </>
    );
};

export default Banner;