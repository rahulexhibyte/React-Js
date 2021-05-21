import React, { useState, useReducer } from "react";

const userReducer = (state, action) => {
  console.log(state);
  if (action.type === "USER_DATA") {
    return { ...state, [action.name]: action.val };
  } else if (action.type === "RESET") {
    return {
      name: "",
      age: 0,
    };
  }
  return {
    name: "",
    age: 0,
  };
};

const NewUser = (props) => {
  //using useState
  // const [userData, setUserData] = useState({
  //   name: "",
  //   age: 0,
  // });

  //using useReducer

  const [userData, dispatchUser] = useReducer(userReducer, {
    name: "",
    age: 0,
  });

  const [error, setError] = useState("");

  const inputHandler = (event) => {
    // setUserData({
    //   ...userData,
    //   [event.target.name]: event.target.value,
    // });
    dispatchUser({
      type: "USER_DATA",
      name: event.target.name,
      val: event.target.value,
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userData.name === "") {
      setError("Please Enter Name CareFully");
    } else if (userData.age <= 0) {
      setError("Please Enter Valid Age");
    } else {
      setError("");
      const newUserData = {
        ...userData,
        id: new Date().getTime(),
      };
      props.onSaveUser(newUserData);
      //   setUserData({ name: "", age: 0 });
      dispatchUser({
        type: "RESET",
      });
    }
  };
  return (
    <div className="new-user">
      <form onSubmit={addUserHandler}>
        <div className="form-controls">
          <div className="form-control">
            <label>Name</label>
            <input
              placeholder="Enter Your Name"
              name="name"
              value={userData.name}
              onChange={inputHandler}
            />
          </div>
          <div className="form-control">
            <label>Age</label>
            <input
              placeholder="Enter Your Age"
              type="number"
              step="1"
              name="age"
              value={userData.age}
              onChange={inputHandler}
            />
          </div>
        </div>
        <p className="error-txt">{error}</p>
        <button className="adduser-btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default NewUser;
