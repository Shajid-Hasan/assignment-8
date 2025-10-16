import React from 'react';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    if (!app) return null;
    const { id, image, title, companyName, downloads, ratingAvg } = app;

    return (
        <Link
            to={`/app/${id}`}
            className="block hover:scale-105 transition-transform duration-200"
        >
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-md transition-shadow">
                <figure className="h-73 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover p-4 rounded-[30px]"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title mx-auto">
                        {title} : {companyName}
                    </h2>

                    <div className="flex justify-between items-center mt-2">
                        {/* Downloads */}
                        <div className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] p-1 rounded-1xl">
                            <Download size={18} />
                            <span>{downloads?.toLocaleString() || 0}+</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 rounded-1xl">
                            <Star size={18} className="text-yellow-500" />
                            <span>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;