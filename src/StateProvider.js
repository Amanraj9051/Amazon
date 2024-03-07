import { createContext, useContext } from "react";
import { useReducer } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
   // const [state,dispatch]=useReducer(reducer, initialState)
   // console.log("lll",useReducer(reducer, initialState))
   return (
      <StateContext.Provider value={{ myReducer: useReducer(reducer, initialState), initialState}}>
         {children}
      </StateContext.Provider>
   )

}

export const useStateValue = () => useContext(StateContext);