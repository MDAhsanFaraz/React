import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy data",
    email: "dummy@gamil.com",
  },
});
export default UserContext;
