import React, { useState } from "react";

import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";

const App = () => {
  const [userListData, setUserListData] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserListData((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      {userListData.length > 0 && <UserList users={userListData} />}
    </div>
  );
};

export default App;
