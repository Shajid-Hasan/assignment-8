import React, { useEffect, useState } from 'react';
import { Download, Star, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AppNotFound from '../Pages/AppNotFound.jsx';
import { useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch('/All.json')
            .then((res) => res.json())
            .then((data) => {
                const selected = data.find((item) => item.id === parseInt(id));
                setApp(selected || null);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    // Show loading state while fetching
    if (loading) {
        return <p className="text-center mt-10 text-gray-500 text-lg">Loading app details...</p>;
    }

    // AppNotFound page
    if (!app) {
        return <AppNotFound />;
    }

    
    const handleInstall = () => {
        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
    };

    // Prepare Rating Data for Chart
    const ratingData = app.ratings?.map((rating) => ({
        name: rating.name,
        count: rating.count,
    })) || [];

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <Toaster position="top-center" />

            {/* App Details Section */}
            <div className="grid md:grid-cols-2 gap-8 bg-white shadow-md p-6 rounded-2xl items-center">
                {/* App Image */}
                <div className="flex justify-center">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>

                {/* App Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
                    <h3 className="text-lg text-gray-600 mb-4">{app.companyName}</h3>
                    <hr className="mb-4" />

                    {/* Stats Section */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        {/* Downloads */}
                        <div className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] px-3 py-2 rounded-xl">
                            <Download size={20} />
                            <span>{app.downloads?.toLocaleString()}+</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 text-[#FF8811] bg-[#FFF0E1] px-3 py-2 rounded-xl">
                            <Star size={20} />
                            <span>{app.ratingAvg}</span>
                        </div>

                        {/* Reviews */}
                        <div className="flex items-center gap-2 text-[#1E3A8A] bg-[#E0E7FF] px-3 py-2 rounded-xl">
                            <MessageSquare size={20} />
                            <span>{app.reviews?.toLocaleString()} Reviews</span>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-6 py-3 text-white font-semibold rounded-xl transition 
                            ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00C080]'}
                        `}
                    >
                        {installed ? 'Installed' : 'Install App'}
                    </button>
                </div>
            </div>

            {/* Rating Bar Chart Section */}
            <div className="mt-12 bg-white shadow-md p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Ratings</h2>
                {ratingData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ratingData} layout="vertical" margin={{ left: 30, right: 30 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF8811" radius={[0, 8, 8, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <p className="text-center text-gray-500">No rating data available.</p>
                )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed mt-6">{app.description}</p>
        </div>
    );
};

export default AppDetails;
