import React from "react";

const NotFound = () => {
  return (
    <div className="absolute top-0 flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
      <p className="text-xl text-gray-600 mb-8 animate-pulse">Page Not Found</p>
      <img src="https://cdn.pixabay.com/photo/2016/12/08/15/45/panda-1892023_1280.png" alt="404 Error Img" className="w-1/3 mb-8 animate-spin-slow" />
      <a href="/" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
