import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegeName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "username OR age cannot be empty",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be greater than zero ( age > 0 )",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge, enteredCollegeName);

    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} error={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            ref={collegeInputRef}
          />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
