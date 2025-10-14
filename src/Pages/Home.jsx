import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import Banner from '../Components/Banner';

const Home = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('/Apps.json')
            .then((res) => res.json())
            .then((data) => setApps(data))

    }, []);

    return (
        <>
            <Banner/>
            <div>
                <h1 className='text-center text-3xl font-bold mb-2'>Trending Apps</h1>
                <p className='text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-11/12 mx-auto">
                {
                    apps.map((app) => (
                        <AppCard key={app.id} app={app} />
                ))}
            </div>
        </>
    );
};

export default Home;
