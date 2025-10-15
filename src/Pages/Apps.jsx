import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import { Toaster } from 'react-hot-toast';

const Apps = () => {
    const [apps, setApps] = useState([]);

    // Load apps data
    useEffect(() => {
        fetch('/All.json')
            .then((res) => res.json())
            .then((data) => setApps(data))
    }, []);

    return (
        <div className="max-w-11/12 mx-auto py-8">
            <Toaster /> {/* Toast container */}
            <h1 className="text-3xl font-bold text-center mb-4">All Apps</h1>
            <p className="text-center text-gray-600 mb-8">
                Browse all available apps with detailed information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {apps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;
