
import axios from 'axios';
import { notification } from 'antd';


const updateLikeToDb = async (id, status) => {
    try {
        return await axios.patch(`http://localhost:8080/user/like/${id}`, {
            like: status
        });
    }
    catch (e) {
        notification.warning({
            message: "OOps!!! Error updating data"
        });
    }
}

const deleteUserFromDb = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/user/${id}`);
    }
    catch (e) {
        notification.warning({
            message: "OOps!!! Error deleting data"
        });
    }
}

const updateUserToDb = async (id, updatedData, setApiData, ApiData) => {
    try {
        const data = await axios.patch(`http://localhost:8080/user/${id}`, updatedData);

        console.log(data.data)

        const newData = ApiData.map((oldData) => {
            if (oldData.id === id) {
                return data.data
            }
            else {
                return oldData
            }
        })

        setApiData(newData);
    }
    catch (e) {
        notification.warning({
            message: "OOps!!! Error updating data"
        });
    }
}


export { updateLikeToDb, deleteUserFromDb, updateUserToDb };