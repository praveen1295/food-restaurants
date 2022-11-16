export default function reducer(state, action) {
  switch (action.type) {
    case "userData": {
      const userData = [
        ...state.USER,
        { ...action.payload, id: state.USER.length },
      ];
      return { ...state, USER: userData };
    }

    // case "addToCart": {
    //   let addItem = true;
    //   const data = state.cartData.map((item, idx) => {
    //     if (item.item === action.payload.itemName) {
    //       addItem = false;
    //       return {
    //         ...item,
    //         count: item.count + 1,
    //       };
    //     }
    //     return item;
    //   });
    //   if (!addItem) {
    //     return {
    //       ...state,
    //       cartData: data,
    //     };
    //   }
    //   if (addItem) {
    //     let addData = [
    //       ...state.cartData,
    //       {
    //         item: action.payload.itemName,
    //         price: action.payload.itemPrice,
    //         count: 1,
    //         id: action.payload.index,
    //       },
    //     ];
    //     return {
    //       ...state,
    //       cartData: addData,
    //     };
    //   }

    //   return {
    //     ...state,
    //   };
    // }

    case "addToCart": {
      let addItem = true;
      let index = action.payload.currentUser.id;

      const data = state.USER[index].cartData.map((item, idx) => {
        if (item.item === action.payload.itemName) {
          addItem = false;
          console.log("gggggggggggggggggggggggggggggg");
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      if (!addItem) {
        state.USER[index].cartData = data;
        return {
          ...state,
        };
      }

      if (addItem) {
        let addData = [
          ...state.USER[index].cartData,
          {
            item: action.payload.itemName,
            price: action.payload.itemPrice,
            count: 1,
            id: action.payload.index,
          },
        ];
        state.USER[index].cartData = addData;
        // return {
        //   ...state,
        // };
      }

      return {
        ...state,
      };
    }

    // case "removeFromCart": {
    //   const data = state.cartData
    //     .map((item, index) => {
    //       if (item.item === action.payload) {
    //         return {
    //           ...item,
    //           count: item.count - 1,
    //         };
    //       }
    //       return item;
    //     })
    //     .filter((item, index) => {
    //       return item.count > 0;
    //     });
    //   return {
    //     ...state,
    //     cartData: data,
    //   };
    // }

    case "removeFromCart": {
      const index = action.payload.currentUser.id;
      const data = state.USER[index].cartData
        .map((item, index) => {
          if (item.item === action.payload.itemName) {
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
      state.USER[index].cartData = data;
      return {
        ...state,
        // cartData: data,
      };
    }
    default:
      return state;
  }
}
