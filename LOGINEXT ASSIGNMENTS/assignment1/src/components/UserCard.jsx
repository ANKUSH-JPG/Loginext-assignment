import React from "react";

const UserCard = (props) => {
    return (
        <div className="UserCardOuter">
            <div className="UserCardInner">
                <div className="UserImage">
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${props.Details.name}.svg?options[mood][]=happy`} alt="Avatar"/>
                </div>
                <div className="UserDetails">
                    <div className="UserName"><h2>{props.Details.name}</h2></div>
                    <div className="Details"><strong>Email:</strong> {props.Details.email}</div>
                    <div className="Details"><strong>Phone:</strong> {props.Details.phone}</div>
                    <div className="Details"><strong>Company:</strong> {props.Details.company.name}</div>
                    <div className="Details"><strong>Website:</strong> {props.Details.website}</div>
                    <div className="Details"><strong>Address:</strong> {props.Details.address.street},{props.Details.address.suite},{props.Details.address.city},{props.Details.address.zipcode}</div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;