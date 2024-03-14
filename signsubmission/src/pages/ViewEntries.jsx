import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewCard from '../Components/ViewCard';

export default function ViewEntries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("login_id");
        const response = await axios.get(`http://127.0.0.1:8000/api/view/${id}`);
        setEntries(response.data.data);
        console.log(entries,'this are entries');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    <h1 className="text-3xl text-white text-center mb-10 font-semibold ">View Entries</h1>
    {loading ? (
      <p className='text-white'>Loading...</p>
    ) : error ? (
      <p className='text-white'>Error: {error}</p>
    ) : (
      <div className='w-[80vw] flex flex-row flex-wrap justify-center align-middle h-auto gap-8 '>
        {entries.map((entry, index) => (
          <div><ViewCard  key={index} views={entry} /><p className='text-white'>{index} -entry</p></div>
          
        ))}
      </div>
    )}
   <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="/form" className="bg-white text-black px-10 py-5  border border-black rounded-md hover:bg-green-600">
          Add Entry ➕
        </a>
      </div>
  </div>
  );
}
