import React from 'react';
import { Link } from 'react-router';
import Not from "../assets/error-404.png"

const AppNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <img src={Not} alt="" />
            <h1 className="text-5xl font-bold mt-4 mb-4">Oops, page not found!</h1>
            <p className="text-gray-600 mb-6 max-w-md">
                The page you are looking for is not available.
            </p>
            <Link
                to="/apps"
                className="px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg hover:bg-blue-700"
            >
                Go Back !
            </Link>
        </div>
    );
};

export default AppNotFound;
