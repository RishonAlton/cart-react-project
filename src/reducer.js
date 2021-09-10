const reducer = (state, action) => {

    if(action.type === "LOADING") {
        return {...state, loading: true}
    }

    if(action.type === "DISPLAY_DATA") {
        return {...state, cart: action.payload, loading: false}
    }

    if(action.type === "CLEAR_CART") {
        return {...state, cart: []}
    }

    if(action.type === "REMOVE_ITEM") {
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    }

    if(action.type === "CHANGE_AMOUNT") {
        const newCart = state.cart.map(item => {
            if(item.id === action.payload.id) {
                if(action.payload.type === "increase") {
                    return {...item, amount: item.amount + 1}
                }
                if(action.payload.type === "decrease") {
                    return {...item, amount: item.amount - 1}
                }
            }
            return item
        }).filter(item => item.amount !== 0)
        return {...state, cart: newCart}
    }

    if(action.type === "GET_TOTALS") {
        let { total, amount } = state.cart.reduce((cartTotal, item) => {
            const {price, amount} = item
            const itemTotal = price * amount
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, {total: 0, amount: 0})
        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}
    }

    throw new Error("No matching action type")

}


export default reducer