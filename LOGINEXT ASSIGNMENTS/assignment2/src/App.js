import { Pagination } from "antd";
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
      console.log(Api.data)
      setApiData(Api.data.users)
      setcurrentPage(Api.data.currentPage);
      settotalUsers(Api.data.totalUsers);
    }
    catch (err) {
      console.log(err);
    }
  }

  const pageClick=(page)=>{
      setcurrentPage(page-1);
  }

  useEffect(() => {
    const ApiUrl = `http://localhost:8080/user/pagination/?page=${currentPage}`;
    FetchApiData(ApiUrl);
    setTimeout(() => {
      setLoader(false);
    }, 3000)

  }, [currentPage])

  return (
    <div>
      {Loadercheck ? <Loader /> :
        <div>
          <CardCaller ApiData={ApiData} setApiData={setApiData} />
          <div className="pagination"><Pagination defaultCurrent={1}  onChange={pageClick} defaultPageSize={5} total={totalUsers}/></div>
        </div>}
    </div>
  );
}

export default App;