'use client'
import { useState, useEffect } from 'react';
import { db } from '@/firebaseConfig';
import { ref, get, update } from 'firebase/database';

const UpdateUserData = () => {
  const [userData, setUserData] = useState([]);
  const [newAge, setNewAge] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const usersRef = ref(db, 'users');
      try {
        const usersSnapshot = await get(usersRef);
        const usersData = [];
        usersSnapshot.forEach((childSnapshot) => {
          usersData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        setUserData(usersData);
      } catch (error) {
        console.error('Error fetching data from Realtime Database: ', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (userId) => {
    const userRef = ref(db, `users/${userId}`);
    try {
      await update(userRef, {
        age: newAge,
        number: newNumber
      });
      alert('User data updated successfully!');
      setNewAge('');
      setNewNumber('');
    } catch (error) {
      console.error('Error updating user data: ', error);
      alert('Failed to update user data. Please try again.');
    }
  };

  return (
    <div className="bg-green-300 text-black p-4 rounded-md shadow-md">
    <h2 className="text-lg font-semibold mb-4">User Data:</h2>
    {userData ? (
    <ul>
      {userData.map((user) => (
        <li key={user.id} className="mb-4">
          <div className="flex justify-between">
            <div>
              <span className="">Name: {user.name}</span>
              <span className="block ">Age: {user.age}</span>
              <span className="block ">Number: {user.number}</span>
            </div>
            <div className="flex space-x-1 h-10 ">
              <input
                type="number"
                value={newAge}
                placeholder="New Age"
                onChange={(e) => setNewAge(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              />
              <input
                type="tel"
                value={newNumber}
                placeholder="New Number"
                onChange={(e) => setNewNumber(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              />
              <button
                onClick={() => handleUpdate(user.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-md"
              >
                Update
              </button>
              
            </div>
          </div>
          
          <hr className='w-full h-[2px] bg-black text-black'/>
        </li>
      ))}
    </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  
  );
};

export default UpdateUserData;
