import React from "react";
import {Modal,Form} from "antd";
import UserForm from "./UserForm";

const UserModal = (props) => {

    const [form]=Form.useForm();

    /*const handleModalOk = () => {
        
        props.setModal(false);
    }*/

    const handleModalCancel = () => {
        props.setModal(false);
    }
    return (
        <Modal title="Update User" visible={props.UpdateModal} onOk={form.submit} onCancel={handleModalCancel} >
            <UserForm form={form} id={props.id} details={props.details} ApiData={props.ApiData} setApiData={props.setApiData} setModal={props.setModal}/>
        </Modal>
    );
}

export default UserModal;