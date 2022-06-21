import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (fname, lname) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { firstName: fname, lastName: lname, id: Math.random().toString() }
      ];
    });
  };
  const deleteItemHandler = (userId) => {
    setUsersList((prevList) => {
      const updatedList = prevList.filter((user) => user.id !== userId);
      return updatedList;
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList} onDeleteItem={deleteItemHandler}></UserList>
    </div>
  );
}

export default App;
