import React from "react";
import { Link } from 'react-router-dom'

const homepage = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl mx-auto text-center">
        <span className="text-4xl font-semibold text-emerald-500">Ad Management</span>
        <p className="text-gray-600 mt-2 mb-8">
          Manage your advertisements with ease. Create new ads or view the existing ones to edit or delete.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* Post Ad Card */}
          <Link to="/ad/post">
          <div
            className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-xl transition-all duration-200 ease-in-out p-10 hover:-translate-y-2 "
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">
              <i class="fa-solid fa-ticket fa-billboard text-6xl text-emerald-500 mb-5 block"></i>
                <h3 className="text-2xl leading-6 font-medium text-gray-900">Post Ad</h3>
                <p className="mt-4 text-sm text-gray-500">
                  Create and publish a new advertisement. Customize your ad with images, descriptions, and pricing to attract potential customers.
                </p>
              </div>
            </div>
          </div>
          </Link>

          {/* View Ad List Card */}
          <Link to="/ad/list">
          <div

            className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-xl transition duration-200 ease-in-out p-10 hover:-translate-y-2 "
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">

              <i class="fa-solid fa-cash-register text-6xl text-emerald-500 mb-5 block"></i>
                <h3 className="text-2xl leading-6 font-medium text-gray-900">View Ad List</h3>
                <p className="mt-4 text-sm text-gray-500">
                  Browse and manage all existing advertisements. Edit ad details, change pricing, or remove ads that are no longer needed.
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default homepage;
