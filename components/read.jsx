'use client'
import { useState, useEffect } from 'react';
import { db } from '@/firebaseConfig';
import { ref, get, onValue } from 'firebase/database';

const ReadData = () => {
  const [userData, setUserData] = useState(null);

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

    // Subscribe to changes in the data
    const usersRef = ref(db, 'users');
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const updatedData = [];
      snapshot.forEach((childSnapshot) => {
        updatedData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      setUserData(updatedData);
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

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

export default ReadData;
