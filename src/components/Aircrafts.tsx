import { useState } from 'react';

export const Aircrafts = () => {

  const [aircrafts, setAircrafts] = useState([]);
  const getAircrafts = () => {
    fetch('http://localhost:8003/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'call', id: 1, method: 'aircraft/getAllAircrafts', args: {}}),
    }).then((res) => res.json().then((data) => {
      console.dir({data});
      setAircrafts(data.result.value.aircrafts)
    }), (err) => console.log(err));
  }

  return (
    <div>
      <ul>
        {aircrafts.map((record, index) => (
          <li key={index}>
            <strong>Code:</strong> {record.code} 
          </li>
        ))}
      </ul>
        
      <button onClick={getAircrafts}>Hello Aircrafts</button>
    </div>
  )
}
