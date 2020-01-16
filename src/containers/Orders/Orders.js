import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios.orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
        .then((resp) => {
            const orders = []
            Array.from(Object.keys(resp.data)).forEach(elem => {
                orders.push({
                    ...resp.data[elem],
                    id: elem
                })
            })
            this.setState({orders: orders, loading:false})
        }).catch( err => {
            this.setState({loading:false})
        })
    }

    render() {
        const orders = this.state.orders.map(elem => {
            return <Order key={elem.id} ingredients={elem.ingredients} price={elem.price} />
        })
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios)