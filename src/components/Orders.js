import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrders} from '../actions/orderActions'


class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }
    render() {
        const {orders} = this.props
        return !orders ? (<div>There are no order yet</div>) :
        (<div className="orders">
            <ul>
                {orders.map(order=>(<li key={order.id}>
                    {order.name}
                </li>))}
            </ul>
        </div>)
    }
}



export default connect(state => ({orders: state.order.orders}), {fetchOrders})(Orders)


