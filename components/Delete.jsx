'use client'
import { useState, useEffect } from 'react';
import { db } from '@/firebaseConfig';
import { ref, get, remove } from 'firebase/database';

const DeleteUserData = () => {
  const [userData, setUserData] = useState([]);

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

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const userRef = ref(db, `users/${userId}`);
      try {
        await remove(userRef);
        alert('User data deleted successfully!');
        setUserData(userData.filter((user) => user.id !== userId));
      } catch (error) {
        console.error('Error deleting user data: ', error);
        alert('Failed to delete user data. Please try again.');
      }
    }
  };

  return (
    <div className="bg-red-300 text-black p-4 rounded-md shadow-md">
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
              <div>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded-md"
                >
                  Delete
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

export default DeleteUserData;
