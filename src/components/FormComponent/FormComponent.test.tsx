import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import FormComponent from "./FormComponent";

Enzyme.configure({ adapter: new Adapter() });

describe("User form component", () => {
  const defaultProps = {
    usersData: [],
    setUsersData: () => {},
    setEditedUser: () => {},
    editedUser: undefined,
    isEdit: false,
  };

  const wrapper = shallow(<FormComponent {...defaultProps} />);


  test("is form is rendering or not render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("input change handler check", () => {
    const onChangeHandle = (id: string, value: any) => {
      const inputField = wrapper.find(`input[test-id="${id}"]`);

      return inputField.simulate("change", { target: { value } });
    };

    onChangeHandle("name", "phani");

    onChangeHandle("email", "phani@gmail.com");

    onChangeHandle("phone", "1234567890");
  });

  test("handle submit", () => {
      const submitBtn = wrapper.find(`[test-id="submitBtn"]`);
      submitBtn.simulate("click");
  })
});

describe("isedit true", () => {
  const user = {
    id: "1",
    name: "phani",
    email: "phani@gmail.com",
    phone: "1234567890",
  };
  test("handle update", () => {
    const defaultProps = {
      usersData: [],
      setUsersData: () => {},
      setEditedUser: () => {},
      editedUser: user,
    };
    const wrapper = shallow(<FormComponent {...defaultProps} />);
    const updateBtn = wrapper.find(`[test-id="updateBtn"]`);
    updateBtn.simulate("click");

    console.log(updateBtn.debug);
  });
});

describe("form component", () => {
  const user1 = {
    id: "1",
    name: "phani",
    email: "phani@gmail.com",
    phone: "1234567890",
  };

  const user2 = {
    id: "2",
    name: "phanindra",
    email: "phanindra@gmail.com",
    phone: "666667890",
  };

  const editedUser = {
    id: "1",
    name: "varma",
    email: "varma@gmail.com",
    phone: "555555555",
  };

  const usersData = [user1, user2];
  const defaultProps = {
    usersData: usersData,
    setUsersData: () => {},
    setEditedUser: () => {},
    editedUser: editedUser,
    isEdit: false,
  };

  const wrapper = shallow(<FormComponent {...defaultProps} />);

  test("is form component was rendered or not", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("handle change", () => {
    const onChangeHandle = (id: string, value: any) => {
      const getChangingInput = wrapper.find(`input[test-id="${id}"]`);
      return getChangingInput.simulate("change", { target: { value } });
    };

    onChangeHandle("name", "varma");
    onChangeHandle("email", "varma@gmail.com");
    onChangeHandle("phone", "555555555");
  });

  const updateBtn = wrapper.find(`[test-id="updateBtn"]`);
  updateBtn.simulate("click");
});
