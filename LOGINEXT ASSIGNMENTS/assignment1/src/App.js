import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

const App = () => {
  const [ApiData, changeApiData] = useState([]);
  const [Spinner, SpinnerState] = useState(true);

  const ApiCall = async (ApiUrl) => {
    try {
      const response = await axios.get(ApiUrl);
      changeApiData(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const ApiUrl = "https://jsonplaceholder.typicode.com/users";
    ApiCall(ApiUrl);
    setTimeout(() => {
      SpinnerState(false);
    }, 3000);

  }, [ApiData.length])

  return (
    <>
      {Spinner && <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>}
      {!Spinner && <div className="root">
        {ApiData.map((data) => {
          return <UserCard key={data.id} Details={data} />
        })}
      </div>}
    </>
  );
}

export default App;