import React, { useState, useEffect } from 'react';

import { HttpServices } from 'demo/dist/index';

function TestAPIServices({ baseUrl }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  if (!baseUrl) {
    throw new Error('Pass a valid base Url')
  }
  // Replace with API's base URL
  const apiService = HttpServices.create(baseUrl);
  useEffect(() => {
    apiService
      .get('/todos')
      .then(data => {
        setData(data.slice(0,10));
        setIsLoading(false);
      })
      .catch(error => {
        setError(error)
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='demo'>
        {isLoading ? (
            <div>Loading...</div>
        ) : error ? (
            <div style={{ color: 'red' }}>Error: {error.message}</div>
        ) : (
            data && data.length > 0 ? (
                <div>
                    <h2>Fetched API Data:</h2>
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>No data available.</div>
            )
        )}
    </div>
);
}
export default TestAPIServices;