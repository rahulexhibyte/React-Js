import React, { useState, useEffect } from "react";

import "./App.css";
import NewUser from "./components/NewUser";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")) ?? []);
    console.log("UseEffect Triggered.");
  }, []);

  useEffect(() => {
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //   dependencies : [] => useEffect Triggred only when it's rendered.

  const addUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div className="users">
      <NewUser onSaveUser={addUser}></NewUser>
      <Users items={users} />
    </div>
  );
}

export default App;
