

import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full py-4 text-white text-center">
        <h1 className="text-3xl font-bold">Capture The Flag Challenge</h1>
        {/* <h1>Flag is 80569879586</h1> */}
      </header>
      <main className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the CTF Challenge!</h2>
        <p className="text-gray-700 mb-4">
          In this challenge, you will face a series of tasks and puzzles designed to test your web development and security skills. Solve each flag to advance through the challenge.
        </p>
        <h3 className="text-xl font-semibold mb-2">Rules and Guidelines:</h3>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700">1. Each flag must be solved in sequence.</li>
          <li className="text-gray-700">2. Only proceed to the next page after submitting the correct flag.</li>
          <li className="text-gray-700">3. Use your skills and creativity to uncover hidden clues.</li>
        </ul>
        <a
          href="/flag1" // Update the link to the actual URL for the first flag page
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Start Challenge
        </a>
      </main>
    </div>
  );
};

export default Home;
