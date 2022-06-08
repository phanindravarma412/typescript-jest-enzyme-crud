import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserCard from "./UserCard";

Enzyme.configure({ adapter: new Adapter() });

describe("user card component testing", () => {
  const user = {
    id: "1",
    name: "phani",
    email: "phani@gmail.com",
    phone: "1234567890",
  };

  const usersData = [user];

  const defaultProps = {
    usersData: usersData,
    editedUser: undefined,
    setUsersData: () => {},
    setEditedUser: () => {},
    setIsEdit: () => {},
  };

  const wrapper = shallow(<UserCard {...defaultProps} />);

  test("render", () => {});

  test("handle delete", () => {
    const deleteBtn = wrapper.find('[test-id="deleteBtn"]');
    deleteBtn.simulate("click");
    const editBtn = wrapper.find('[test-id="editBtn"]');
    editBtn.simulate("click"); 
  });
});
