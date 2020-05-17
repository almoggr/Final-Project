import React, { Component } from 'react';
import Header from "./comps/header";
import TopNav from "./comps/topNav";
import NewBasketFields from "./comps/newBasketFields";
import './style/fields.css';

const formValid = status => {
    let valid = true;
    Object.values(status).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class NewBasket extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            basicFood: [],
            minSouls: 0,
            maxSouls: 0,
            food: "",
            formErrors: {
                name: "",
                minSouls: "",
                maxSouls: "",
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'name':
                formErrors.name = value.length > 0 ? "" : "Error";
                break;
            case 'minSouls':
                formErrors.minSouls = value > 0 ? "" : "Error";
                break;
            case 'maxSouls':
                formErrors.maxSouls = value < 15 ? "" : "Error";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            clearTimeout('submited')
        } else {
            window.location.reload()
        }

    }

    newFood = () => {
        this.state.basicFood.push(this.state.food)
        this.setState({
            food: ""
        })
    }

    render() {
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            Header title = "New Basket" > < /Header> <
            div className = "details" > <
            NewBasketFields handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
            newFood = { this.newFood }
            basicFood = { this.state.basicFood } > < /NewBasketFields> < /
            div > < /
            div >
        )
    }
}

export default NewBasket;