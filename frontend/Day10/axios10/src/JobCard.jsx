import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {job.type}
        </span>
      </div>
      
      <div className="mt-4 flex items-center text-gray-500 text-sm">
        <span className="mr-4">📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>
      
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;