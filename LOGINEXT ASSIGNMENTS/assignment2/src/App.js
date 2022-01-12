import axios from "axios";
import React, { useState,useEffect} from "react";
import CardCaller from "./components/CardCaller";
import Loader from "./components/Loader";

const App = () => {

  const [ApiData, setApiData] = useState([]);
  const [Loadercheck, setLoader] = useState(true)

  const FetchApiData=async (ApiUrl)=>{
      try{
        const Api=await axios.get(ApiUrl);
        setApiData(Api.data)
      }
      catch(err){
        console.log(err);
      }
  }

  useEffect(() => {
    const ApiUrl="http://localhost:8080/user";
    FetchApiData(ApiUrl);
    setTimeout(()=>{
      setLoader(false);
    },3000)
    
  }, [])

  return (
    <div>
      {Loadercheck ? <Loader />:<CardCaller ApiData={ApiData} setApiData={setApiData}/>}
    </div>
  );
}

export default App;