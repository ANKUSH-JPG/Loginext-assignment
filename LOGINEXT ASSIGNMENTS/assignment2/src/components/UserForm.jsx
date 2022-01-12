import React from "react";
import { Form, Input } from "antd";
import { updateUserToDb } from "../db_services/DbOperations";

const UserForm = (props) => {

    const OnFinishFun=()=>{
        props.setModal(false);
        console.log(props.form.getFieldValue());
        updateUserToDb(props.id,props.form.getFieldValue(),props.setApiData,props.ApiData);
        
    }

    return (
        <Form name="userForm" autoComplete="off" labelCol={
            {
                span:8
            }
        }  wrapperCol={
            {
                span:16
            }
        }  form={props.form} onFinish={OnFinishFun} initialValues={{
            name:props.details.name,
            email:props.details.email,
            phone:props.details.phone,
            website:props.details.website
        }}>
            <Form.Item label="Name" name="name"  rules={
                [{
                    required:true,
                    message:"name is required"
                }]
            }>
                <Input onChange={(val)=>{
                    const data=val.target.value;
                    props.form.setFieldsValue({name:data});
                }
                }/>
            </Form.Item>

            <Form.Item label="Email" name="email" rules={
                [{
                    required:true,
                    message:"Email is required"
                }]
            }>
                <Input onChange={(val)=>{
                    const data=val.target.value;
                    props.form.setFieldsValue({email:data});
                }
                }/>
            </Form.Item>

            <Form.Item label="Phone" name="phone" rules={
                [{
                    required:true,
                    message:"Phone is required"
                }]
            }>
                <Input onChange={(val)=>{
                    const data=val.target.value;
                    props.form.setFieldsValue({phone:data});
                }
                }/>
            </Form.Item>

            <Form.Item label="Website" name="website" rules={
                [{
                    required:true,
                    message:"website is required"
                }]
            }>
                <Input onChange={(val)=>{
                    const data=val.target.value;
                    // props.form.setFieldsValue({company:{name:data}});
                    props.form.setFieldsValue({website:data});
                }
                }/>
            </Form.Item>

        </Form>
    );
}


export default UserForm;