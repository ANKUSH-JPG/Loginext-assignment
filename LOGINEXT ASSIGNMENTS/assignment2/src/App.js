import { Pagination,notification} from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CardCaller from "./components/CardCaller";
import Loader from "./components/Loader";

const App = () => {
  const [ApiData, setApiData] = useState([]);
  const [Loadercheck, setLoader] = useState(true)
  const [currentPage, setcurrentPage] = useState(0);
  const [totalUsers, settotalUsers] = useState(0);

  const FetchApiData = async (ApiUrl) => {
    try {
      const Api = await axios.get(ApiUrl);
      setApiData(Api.data.users)
      setcurrentPage(Api.data.currentPage);
      settotalUsers(Api.data.totalUsers);
      return Api;
    }
    catch (err) {
      notification.warning({
        message:"OOps!!! Error fetching data"
      });
    }
  }

  const pageClick=(page)=>{
      setcurrentPage(page-1);
  }

  useEffect(async () => {
    const ApiUrl = `http://localhost:8080/user/pagination/?page=${currentPage}`;
    const Api=await FetchApiData(ApiUrl);
    if(Api.status===200){
      setLoader(false);
    }
    
  }, [currentPage])

  return (
    <div>
      {Loadercheck ? <Loader /> :
        <div>
          <CardCaller ApiData={ApiData} setApiData={setApiData} />
          {totalUsers>0 ? <div className="pagination"><Pagination defaultCurrent={1}  onChange={pageClick} defaultPageSize={4} total={totalUsers}/></div> : <div></div>}
        </div>}
    </div>
  );
}

export default App;