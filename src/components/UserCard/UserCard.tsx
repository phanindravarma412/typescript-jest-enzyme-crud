import React from "react";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import styles from "./UserCard.module.css";
import { UserModal } from "../../models/UserModal";

interface UserCardProps {
  usersData: UserModal[];
  setUsersData: React.Dispatch<React.SetStateAction<UserModal[]>>;
  setEditedUser: React.Dispatch<React.SetStateAction<UserModal | undefined>>;
}

const UserCard: React.FunctionComponent<UserCardProps> = ({
  usersData,
  setUsersData,
  setEditedUser,
}) => {
  const deleteUser = (id: string) => {
    console.log("DELETE USER ");
    setUsersData(usersData.filter((user) => user.id !== id));
  };

  const editUser = (id: string, user: UserModal) => {
    console.log("EDIT USER ");

    setEditedUser(user);
  };

  return (
    <div>
      {usersData?.map((user) => (
        <div key={user.id} className={styles.userCard}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <div onClick={() => editUser(user.id, user)} test-id="editBtn">
            <Edit />
          </div>

          <div onClick={() => deleteUser(user.id)} test-id="deleteBtn">
            <Delete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
