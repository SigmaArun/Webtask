import React ,{useState} from 'react';
import InputForm from "./InputForm";
import UsersList from "./UsersList";

const App=()=>{
   const[usersList,setUsersList]= useState([])

   const addUserHandler=(uName,uAge)=>{
        setUsersList((prevUserList)=>{
            return [...prevUserList,{name:uName,age:uAge ,id:Math.random().toString()}];
        });
    }
    return(
        <React.Fragment>
            <InputForm onAddUser={addUserHandler}></InputForm>
            <UsersList users={usersList}></UsersList>
        </React.Fragment>
    )
}
export default App;