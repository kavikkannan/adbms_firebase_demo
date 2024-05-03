'use client'
import { useState } from 'react';
import { db } from '@/firebaseConfig';
import { ref, push } from 'firebase/database';

const CreateData = () => {
  // Define state variables to store form input values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a reference to the 'users' collection in the database
    const usersRef = ref(db, 'users');

    try {
      // Push new data to the 'users' collection
      await push(usersRef, {
        name,
        age,
        number
      });

      // Clear form input fields after successful submission
      setName('');
      setAge('');
      setNumber('');

      alert('Data added to Firebase Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Firebase Realtime Database: ', error);
      alert('Failed to add data to Firebase Realtime Database. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="bg-green-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-semibold mb-4">Create User Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Number:</label>
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateData;
