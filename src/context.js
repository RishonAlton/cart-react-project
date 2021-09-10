import React, {useEffect, useContext, useReducer} from "react"
import reducer from "./reducer"


const url = "https://course-api.com/react-useReducer-cart-project"

const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: [],
    amount: 0,
    total: 0
}


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async () => {
        dispatch({type: "LOADING"})
        const response = await fetch(url)
        const data = await response.json()
        dispatch({type: "DISPLAY_DATA", payload: data})
    }

    useEffect(() => {
        fetchData()
    }, [])

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    const changeAmount = (id, type) => {
        dispatch({type: "CHANGE_AMOUNT", payload: {id, type}})
    }

    useEffect(() => {
        dispatch({type: "GET_TOTALS"})
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeItem,
                changeAmount
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export { AppProvider, useGlobalContext }