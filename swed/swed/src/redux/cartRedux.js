// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//     name : "cart",
//     initialState:{
//         products:[],
//         quantity:0,
//         total:0,
//     },
//     reducers:{
//         addProduct :(state, action)=>{
//             state.quantity +=1;
//             state.products.push(action.payload)
//             state.total+=action.payload.price*action.payload.quantity;
//         },
//     }
// });
// export const {addProduct} = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {

    addProduct: (state, action) => {
      
     
                    state.quantity =state.quantity+1;
                    state.products.push(action.payload)
                    state.total+=action.payload.price*action.payload.quantity;
    
    },
    // clearCart: (state) => {
        
    //     state.products = [];
    //     state.quantity = 0;
    //     state.total = 0;
    //   },

    removeProduct: (state, action) => {
      // Find the product to remove
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );
      if (productIndex !== -1) {
        // If product is found, remove it
        const productToRemove = state.products[productIndex];
        state.total -= productToRemove.price * productToRemove.quantity;
        state.products.splice(productIndex, 1);
        state.quantity -= 1;
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((product) => product._id === productId);
      if (product) {
        // Increase the product quantity and update total price
        product.quantity += 1;
        state.total += product.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      
      const product = state.products.find((product) => product._id === productId);
      if (product && product.quantity > 1) {
        // Decrease the product quantity and update total price
        product.quantity -= 1;
        state.total -= product.price;
      

      }
    },
   
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

// reducers/cartReducer.js
// const cartReducer = (state = { products: [], total: 0 }, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             // Logic for adding item to the cart
//             return {
//                 ...state,
//                 products: [...state.products, action.payload],
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 products: state.products.filter(product => product._id !== action.payload),
//             };
//         case 'INCREASE_QUANTITY':
//             return {
//                 ...state,
//                 products: state.products.map((product) =>
//                     product._id === action.payload
//                         ? { ...product, quantity: product.quantity + 1 }
//                         : product
//                 ),
//             };
//         case 'DECREASE_QUANTITY':
//             return {
//                 ...state,
//                 products: state.products.map((product) =>
//                     product._id === action.payload && product.quantity > 1
//                         ? { ...product, quantity: product.quantity - 1 }
//                         : product
//                 ),
//             };
//         default:
//             return state;
//     }
// };

// export default cartReducer;
