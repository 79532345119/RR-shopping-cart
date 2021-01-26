import { CLEAR_ORDER, CREATE_ORDER, DELETE_ORDER, FETCH_ORDERS } from "../types"

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return { order: action.payload }
        case CLEAR_ORDER:
            return { order: null }
        case FETCH_ORDERS:
            return { orders: action.payload}
        case DELETE_ORDER:
            return { id: action.payload}
        default:
            return state
    }
}