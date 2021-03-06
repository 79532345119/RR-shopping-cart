import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART, FETCH_ORDERS, DELETE_ORDER } from "../types"

export const createOrder = (order) => dispatch => {
    fetch("api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: CREATE_ORDER, payload: data})
            localStorage.clear("cartItems")
            dispatch({ type: CLEAR_CART})
        })
}

export const clearOrder = () => dispatch => {
    dispatch({ type: CLEAR_ORDER })
}

export const fetchOrders = () => async dispatch => {
    const res = await fetch("api/orders")
    const data = await res.json()
    dispatch({
        type: FETCH_ORDERS,
        payload: data
    })
}

export const deleteOrder = (id) => async dispatch => {
    const res = await fetch("/api/orders/"+id, {method:"DELETE"})
    const data = await res.json()
    dispatch({
        type: DELETE_ORDER,
        payload: data
    })   
}