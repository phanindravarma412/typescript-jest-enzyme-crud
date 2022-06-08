import React from "react";

import { UserModal } from "./models/UserModal";
import FormComponent from "./components/FormComponent/FormComponent";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [usersData, setUsersData] = React.useState<UserModal[]>([]);
  const [editedUser, setEditedUser] = React.useState<UserModal>();

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <FormComponent
          usersData={usersData}
          setUsersData={setUsersData}
          editedUser={editedUser}
        />
      </div>
      <UserCard 
        usersData={usersData}
        setUsersData={setUsersData}
        setEditedUser={setEditedUser}
      />
    </div>
  );
}

export default App;
