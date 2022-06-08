import React from "react";

import styles from "./FormComponent.module.css";
import { UserModal } from "../../models/UserModal";

interface formProps {
  usersData: UserModal[];
  setUsersData: React.Dispatch<React.SetStateAction<UserModal[]>>;
  editedUser: UserModal | undefined;
}

const FormComponent: React.FunctionComponent<formProps> = ({
  setUsersData,
  usersData,
  editedUser,
}) => {
  const [userFormData, setUserFormData] = React.useState<UserModal>({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.SyntheticEvent) => {
    editedUser
      ? setUserFormData({
          ...userFormData,
          [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
            .value,
        })
      : setUserFormData({
          ...userFormData,
          id: `${Math.floor(Math.random() * 100 + 1)}`,
          [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
            .value,
        });
  };

  const formSubmit = () => {
    setUsersData([...usersData, userFormData]);
  };

  const formUpdate = () => {
    console.log(userFormData);
    setUsersData(
      usersData.map((user) =>
        editedUser?.id === user.id
          ? { ...userFormData, user: userFormData }
          : user
      )
    );
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles["input-parent"]}>
          <label>User Name</label>
          <input
            type="text"
            value={editedUser?.name && userFormData.name}
            test-id="name"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className={styles["input-parent"]}>
          <label>Email</label>
          <input
            type="email"
            test-id="email"
            value={editedUser?.email && userFormData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className={styles["input-parent"]}>
          <label>Phone</label>
          <input
            type="number"
            test-id="phone"
            value={editedUser?.phone && userFormData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>

        <button
          test-id={editedUser ? "updateBtn" : "submitBtn"}
          onClick={editedUser ? formUpdate : formSubmit}
        >
          {editedUser ? "update" : "submit"}
        </button>
      </div>
    </>
  );
};

export default FormComponent;
