import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import { fetchAircrafts } from 'store/reducers/ActionCreators';

export const Aircrafts = () => {

  // const [aircrafts, setAircrafts] = useState([]);
  // const getAircrafts = () => {
  //   fetch('http://localhost:8003/api', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ type: 'call', id: 1, method: 'aircraft/getAllAircrafts', args: {}}),
  //   }).then((res) => res.json().then((data) => {
  //     console.dir({data});
  //     setAircrafts(data.result.value.aircrafts)
  //   }), (err) => console.log(err));
  // }

  const dispatch = useAppDispatch();
  const { aircrafts, isLoading, error } = useAppSelector(state => state.aircraftReducer);
  useEffect(() => {
    dispatch(fetchAircrafts());
  }, [])

  return (  
    <div>
      { isLoading && <h1>Loading...</h1> }
      { error && <h1>{ error }</h1> }
      <ul>
        {aircrafts.map((record, index) => (
          <li key={index}>
            <strong>Code:</strong> {record.code} 
          </li>
        ))}
      </ul>
        
      {/* <button onClick={getAircrafts}>Hello Aircrafts</button> */}
    </div>
  )
}
