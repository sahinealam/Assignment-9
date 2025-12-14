import React from 'react';

const ToyCare = () => {
    return (
       <div className="bg-green-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Toy Care Tips
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cleaning */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Cleaning
          </h3>
          <p className="text-gray-600">
            Clean toys regularly using mild soap and water. Avoid harsh
            chemicals to keep toys safe for kids.
          </p>
        </div>

        {/* Storage */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Storage</h3>
          <p className="text-gray-600">
            Store toys in a dry and clean place. Keep them away from direct
            sunlight to prevent damage.
          </p>
        </div>

        {/* Safety */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Safety</h3>
          <p className="text-gray-600">
            Check toys regularly for broken parts. Remove damaged toys to ensure
            child safety.
          </p>
        </div>
      </div>
    </div>
    );
};

export default ToyCare;
