import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import { Toaster } from 'react-hot-toast';

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load apps data
    useEffect(() => {
        fetch('/All.json')
            .then((res) => res.json())
            .then((data) => setApps(data));
    }, []);

    // Filter and search
    const filteredApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-11/12 mx-auto py-8">
            <Toaster />
            <h1 className="text-3xl font-bold text-center mb-2">All Apps</h1>
            <p className="text-center text-gray-600 mb-4">
                Browse all available apps with detailed information.
            </p>

            {/* Count on left, search on right */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-gray-700 font-medium">
                    Total Apps: {filteredApps.length}
                </span>
                <input
                    type="text"
                    placeholder="Search apps..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full sm:w-1/3"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;
