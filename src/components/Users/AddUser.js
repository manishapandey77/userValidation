import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredFname, setEnteredFname] = useState("");
  const [enteredLname, setEnteredLname] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredFname.trim().length === 0 || enteredLname.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the firstName and lastName"
      });
      return;
    }
    if (enteredFname.trim().length <= 2 || enteredLname.trim().length <= 2) {
      setError({
        title: "Invalid Input",
        message: "firstName and lastName must be >2"
      });
      return;
    }
    if (!enteredFname.match(/[a-z]+/)) {
      setError({
        title: "Invalid Input",
        message: "firstName and lastName must be a character"
      });
      return;
    }
    if (!enteredLname.match(/[a-z]+/)) {
      setError({
        title: "Invalid Input",
        message: "firstName and lastName must be a character"
      });
      return;
    }

    console.log(enteredFname, enteredLname);
    props.onAddUser(enteredFname, enteredLname);
    setEnteredFname("");
    setEnteredLname("");
  };
  const fnameHandler = (event) => {
    setEnteredFname(event.target.value);
  };
  const lnameHandler = (event) => {
    setEnteredLname(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            type="text"
            onChange={fnameHandler}
            value={enteredFname}
          ></input>

          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            type="text"
            onChange={lnameHandler}
            value={enteredLname}
          ></input>
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
