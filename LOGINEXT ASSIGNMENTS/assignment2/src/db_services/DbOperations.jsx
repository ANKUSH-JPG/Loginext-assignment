
import axios from 'axios';


    const updateLikeToDb = async (id, status) => {
            try {
                await axios.patch(`http://localhost:8080/user/like/${id}`, {
                    like: status
                });
            }
            catch (e) {
                console.log("error in patch call");
            }
    }

    const deleteUserFromDb=async (id)=>{
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
        }
        catch (e) {
            console.log("error in delete call");
        }
    }

    const updateUserToDb=async (id,updatedData,setApiData,ApiData)=>{
        try{
            const data=await axios.patch(`http://localhost:8080/user/${id}`,updatedData);
            
            const newData=ApiData.map((oldData)=>{
                    if(oldData.id===id){
                       return data.data   
                    }
                    else{
                        return oldData
                    }
            })

            setApiData(newData);
        }
        catch(e){
            console.log("error in post call");
        }
    }


export {updateLikeToDb,deleteUserFromDb,updateUserToDb};