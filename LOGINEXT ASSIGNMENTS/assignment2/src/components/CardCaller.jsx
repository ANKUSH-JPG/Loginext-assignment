import React from "react";
import UserCard from "./UserCard";


const CardCaller = (props) => {
    return (
        <div className="AllUserCards">
            {props.ApiData.map((data) => {
                return (
                    <UserCard key={data.id} details={data} ApiData={props.ApiData} setApiData={props.setApiData}/>
                );
            })}
        </div>
    );
}


export default CardCaller;