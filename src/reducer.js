
const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE_ITEM') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
    }
    if (action.type === 'CHANGE_AMOUNT') {
        return {
            ...state, cart: state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    return { ...cartItem, amount: cartItem.amount + action.payload.quantity }
                }
                return cartItem;
            }).filter((cartItem) => cartItem.amount > 0)
        }
    }
    if (action.type === "GET_TOTALS") {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            cartTotal.amount += amount;
            cartTotal.total += amount * price;
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }
    if (action.type === 'DISPLAY_ITEMS')
        return { ...state, cart: action.payload, loading: false };

    throw new Error('no matching action type');
}

export default reducer