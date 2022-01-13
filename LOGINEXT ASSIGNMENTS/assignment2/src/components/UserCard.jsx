import React, { useState } from "react";
import { Card } from "antd";
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";

import UserModal from "./UserModal";
import { updateLikeToDb, deleteUserFromDb } from "../db_services/DbOperations";


const UserCard = (props) => {

    const [heart, setheart] = useState(props.details.like);
    const [UpdateModal, setModal] = useState(false);

    const heartClicked = async (id) => {

        if (heart === true) {
            const Api = await updateLikeToDb(id, false);
            if (Api.status === 200) {
                setheart(false);
            }
        }
        else {
            const Api = await updateLikeToDb(id, true);
            if (Api.status === 200) {
                setheart(true);
            }
        }
    }

    const showModal = () => {
        if (UpdateModal === false) {
            setModal(true);
        }
        else {
            setModal(false);
        }

    }

    const deleteCard = async (id) => {

        const Api = await deleteUserFromDb(id);
        if (Api.status === 204) {
            const newUserList = props.ApiData.filter((user) => user.id !== id)

            props.setApiData(newUserList);
        }

    }

    return (
        <div className="OuterUserCard">
            <Card className="InnerUserCard"
                style={{}}
                cover={
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${props.details.name}.svg?options[mood][]=happy`} alt="user" />
                }
                actions={[
                    <div>
                        {heart ? <HeartFilled className="icons" key="like" style={{ color: "red" }} onClick={() => heartClicked(props.details.id)} /> :
                            <HeartOutlined className="icons" key="like" style={{ color: "red" }} onClick={() => heartClicked(props.details.id)} />}
                    </div>,
                    <EditOutlined className="icons" key="edit" onClick={showModal} />,
                    <DeleteFilled className="icons" key="delete" onClick={() => deleteCard(props.details.id)} />
                ]}
            >

                <Meta
                    title={props.details.name}
                    description={
                        <div>
                            <div>
                                <MailOutlined className="DescIcon" />
                                <span className="Desc">
                                    {props.details.email}
                                </span>
                            </div>
                            <div>
                                <PhoneOutlined className="DescIcon" />
                                <span className="Desc">
                                    {props.details.phone}
                                </span>
                            </div>
                            <div>
                                <GlobalOutlined className="DescIcon" />
                                <span className="Desc">
                                    {props.details.website}
                                </span>
                            </div>
                        </div>
                    }
                />

            </Card>
            <UserModal UpdateModal={UpdateModal} setModal={setModal} id={props.details.id} details={props.details} ApiData={props.ApiData} setApiData={props.setApiData} />
        </div>
    );
}


export default UserCard;