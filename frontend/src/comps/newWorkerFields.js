import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewWorkerFields extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "fields" >
            <
            form onSubmit = { this.props.handleSubmit } >
            <
            p > Full Name: < input type = "text"
            name = "fullName"
            onChange = { this.props.handleChange }
            required / > < br / >
            ID: < input type = "text"
            name = "ID"
            onChange = { this.props.handleChange }
            required / > < br / >
            Address: < input type = "text"
            name = "address"
            onChange = { this.props.handleChange }
            /><br/ >
            Email: < input type = "email"
            name = "mail"
            onChange = { this.props.handleChange }
            /><br/ >
            Phone: < input type = "text"
            name = "phone"
            onChange = { this.props.handleChange }
            minLength = { 10 }
            /><br/ >
            Birth - Day: < input type = "date"
            name = "birthday"
            onChange = { this.props.handleChange }
            /><br/ >
            You have a car: < input type = "radio"
            name = "car"
            value = "true"
            checked = { this.props.car === "true" }
            onChange = { this.props.handleChange }
            /> Yes <
            input type = "radio"
            name = "car"
            value = "false"
            checked = { this.props.car === "false" }
            onChange = { this.props.handleChange }
            /> No<br/ >
            Which able to give him: < select value = { this.props.able }
            name = "able"
            onChange = { this.props.handleChange } >
            <
            option value = "" > Choose able < /option> <
            option value = "0" > Manager < /option> <
            option value = "1" > Worker < /option> <
            option value = "2" > Volenteer < /option> <
            /select > <
            /p> <
            button type = "submit" > Submit < /button > < /
            form > <
            /div>
        )
    }
}
export default NewWorkerFields;