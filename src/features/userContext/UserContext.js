import { createContext } from "react";
const userContext = createContext({
  USER: [
    // {
    // userName: "Praveen",
    // userEmail: "praveen@gmail.com",
    // userPassword: "12345",
    // confirmUserPass: "12345",
    // id: 1,
    // },
  ],
  flag: {
    login: true,
    signup: false,
    WelcomePage: false,
    menu: false,
    cart: false,
    tku: false,
    logout: false,
  },
  cartData: [
    // { item: "", price: "", count: "", id: "" }
  ],
  userName: "",
});
export default userContext;
