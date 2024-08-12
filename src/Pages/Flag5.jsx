import React, { useState } from 'react';
import axios from 'axios';

const Flag5 = () => {
  const [flag, setFlag] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify', { flag, flagNumber: 5 });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error verifying flag.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Flag 5 Verification</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            className="border p-2 w-full mb-4"
            placeholder="Enter the flag"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Verify
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Flag5;
