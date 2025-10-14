import React from 'react';
import { Download, Star } from 'lucide-react';

const AppCard = ({ app }) => {
    const { image, title, companyName, downloads, ratingAvg } = app;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='h-73 overflow-hidden'>
                <img src={image} alt={title} className="h-full w-full object-cover p-4 rounded-[30px]" />
            </figure>

            <div className="card-body">
                <h2 className="card-title mx-auto">{title} : {companyName}</h2>
                {/* <p className="text-gray-600 text-sm">{companyName}</p> */}
                {/* <p className="text-gray-700 text-sm mb-3">{description}</p> */}

                <div className="flex justify-between items-center mt-2">

                    {/* Download*/}
                    <div className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] p-1 rounded-1xl">
                        <Download size={18} />
                        <span>{downloads.toLocaleString()}+</span>
                    </div>

                    {/* Rating*/}
                    <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 rounded-1xl">
                        <Star size={18} className="text-yellow-500" />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
