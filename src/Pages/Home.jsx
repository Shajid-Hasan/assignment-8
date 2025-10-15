import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import Banner from '../Components/Banner';
import { Link } from 'react-router';

const Home = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('/Apps.json')
            .then((res) => res.json())
            .then((data) => setApps(data));
    }, []);

    return (
        <>
            <Banner />
            <div>
                <h1 className="text-center text-3xl font-bold mb-2">Trending Apps</h1>
                <p className="text-center mb-8">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-11/12 mx-auto">
                {apps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>

            <div className="text-center">
                <Link to="/apps" className="no-underline">
                    <button className="p-2 my-6 text-white font-semibold w-50 rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Show All
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Home;
