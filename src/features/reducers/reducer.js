export default function reducer(state, action) {
  switch (action.type) {
    case "handleSignup": {
      const flg = { ...state.flag, login: false, signup: true };
      return {
        ...state,
        flag: flg,
      };
    }
    case "userDetail": {
      const flg = {
        ...state.flag,
        login: true,
        signup: false,
        WelcomePage: false,
      };
      const userData = [
        ...state.USER,
        {
          userName: action.payload.name,
          userEmail: action.payload.email,
          userPassword: action.payload.password,
          confirmUserPass: action.payload.confirmPassword,
          id: state.USER.length,
        },
      ];
      return { ...state, USER: userData, flag: flg };
    }
    case "handleLogin": {
      let name = "";
      state.USER.map((item) => {
        if (item.userEmail === action.payload.email) {
          name = item.userName;
        }
        return item;
      });

      const flg = {
        ...state.flag,
        login: false,
        WelcomePage: true,
        logout: true,
      };
      return {
        ...state,
        userName: name,
        flag: flg,
      };
    }
    case "GoTOMemu": {
      const flg = {
        ...state.flag,
        login: false,
        WelcomePage: false,
        menu: true,
        cart: true,
      };
      return {
        ...state,
        flag: flg,
      };
    }

    case "thankYou": {
      const flg = {
        ...state.flag,
        menu: false,
        cart: false,
        tku: true,
      };
      return {
        ...state,
        flag: flg,
      };
    }

    case "GoBackToMenu": {
      const flg = {
        ...state.flag,
        menu: true,
        cart: false,
        tku: false,
      };
      return {
        ...state,
        flag: flg,
      };
    }

    case "cartClick": {
      const flg = {
        ...state.flag,
        login: false,
        WelcomePage: false,
        cart: true,
      };
      return {
        ...state,
        flag: flg,
      };
    }

    case "addToCart": {
      let addItem = true;
      const data = state.cartData.map((item, idx) => {
        if (item.item === action.payload.itemName) {
          addItem = false;
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      if (!addItem) {
        return {
          ...state,
          cartData: data,
        };
      }
      if (addItem) {
        let addData = [
          ...state.cartData,
          {
            item: action.payload.itemName,
            price: action.payload.itemPrice,
            count: 1,
            id: action.payload.index,
          },
        ];
        console.log("add");
        return {
          ...state,
          cartData: addData,
        };
      }

      return {
        ...state,
      };
    }

    case "removeFromCart": {
      const data = state.cartData
        .map((item, index) => {
          if (item.item === action.payload) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
        .filter((item, index) => {
          return item.count > 0;
        });
      return {
        ...state,
        cartData: data,
      };
    }

    case "loginNavbar": {
      const flg = {
        ...state.flag,
        login: true,
        signup: false,
        WelcomePage: false,
        menu: false,
        cart: false,
        tku: false,
        logout: false,
      };
      return {
        ...state,
        flag: flg,
      };
    }
    case "logout": {
      const flg = {
        ...state.flag,
        login: true,
        signup: false,
        WelcomePage: false,
        menu: false,
        cart: false,
        tku: false,
        logout: false,
      };
      return {
        ...state,
        flag: flg,
      };
    }

    case "about": {
      const flg = {
        ...state.flag,
        login: true,
        signup: false,
        WelcomePage: false,
        menu: false,
        cart: false,
        tku: false,
      };
      return {
        ...state,
        flag: flg,
      };
    }
    default:
      return state;
  }
}
