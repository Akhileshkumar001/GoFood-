// import { useContext,useReducer } from "react";

// const CartStateContext=useContext()

// const CartDispatchReducer=useReducer()

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "ADD":
//             return [...state,[]];
//             default:
//         console.log("error in reducer");
//     }
    
        

// }

// export const cartProvder=({children})=>{
//     const[state,dispatch]=useReducer(reducer,[])
//     return(
//         <CartStateContext.provider value={dispatch}>
//             <CartDispatchReducer value={state}>
//                 {children}
//             </CartDispatchReducer>
//         </CartStateContext.provider>
//     )

// }

// export const useCart=()=>useContext(CartStateContext)
// export


import React, { useReducer, useContext } from 'react';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newState = [...state, { 
                id: action.id, 
                name: action.name, 
                price: action.price, 
                qty: action.qty, 
                size: action.size 
            }];
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
        case "REMOVE":
            const updatedState = state.filter((_, index) => index !== action.index);
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        case "CLEAR":
            localStorage.removeItem('cart');
            return [];
        default:
            console.log("Error in reducer");
            return state;
    }
}


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);