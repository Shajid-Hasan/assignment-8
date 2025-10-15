import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Star } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch('/All.json')
            .then((res) => res.json())
            .then((data) => {
                const foundApp = data.find((a) => a.id === parseInt(id));
                setApp(foundApp);
            });
    }, [id]);

    const handleInstall = () => {
        setInstalled(true);
        toast.success(`${app.title} Installed Successfully!`);
    };

    if (!app) return <div className="text-center py-8">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto py-8 flex flex-col sm:flex-row gap-6">
            <Toaster />
            {/* App Image */}
            <img src={app.image} alt={app.title} className="w-48 h-48 object-contain rounded-lg" />

            {/* App Details */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
                <p className="text-gray-700 mb-2">{app.companyName}</p>
                <p className="text-gray-600 mb-4">{app.description}</p>

                <div className="flex items-center gap-6 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                        <Download size={18} />
                        <span>{app.downloads?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star size={18} className="text-yellow-500" />
                        <span>{app.ratingAvg}</span>
                    </div>
                    <div>{app.reviews} Reviews</div>
                </div>

                <button
                    onClick={handleInstall}
                    disabled={installed}
                    className={`px-6 py-2 rounded-lg font-semibold ${installed
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {installed ? 'Installed' : 'Install'}
                </button>
            </div>
        </div>
    );
};

export default AppDetails;
