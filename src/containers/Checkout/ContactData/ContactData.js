import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import orderSummary from '../../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../axios.orders'
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                address: {
                    street: 'Testowo 2',
                    zipCode: '45312',
                    country: 'Poland'
                },
                emial: 'tester@test.pl'
            },
            deliverMethod: 'ASAP'
        }
        axios.post('/orders.json', order)
            .then((resp) => {
                this.setState({ loading: false })
                this.props.history.push("/")
            })
            .catch((err) => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your text" />
                <input className={classes.Input} type="emial" name="emial" placeholder="Your emial" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data!</h4>
                {form}
            </div>
        )
    }
}
export default ContactData