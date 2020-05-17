import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateInfoFields extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "details" >
            <
            div className = "fields" >
            <
            form >
            <
            p > Full Name: < input type = "text"
            name = "fullName"
            onChange = { this.props.handleChange }
            /><br/ > Address: < input type = "text"
            name = "address"
            onChange = { this.props.handleChange }
            /><br/ > Email: < input type = "email"
            name = "mail"
            onChange = { this.props.handleChange }
            /><br/ > Phone: < input type = "text"
            name = "phone"
            onChange = { this.props.handleChange }
            /><br/ > You have a car: <
            input type = "radio"
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
            /> No < /
            p > <
            button onClick = { this.props.handleSubmit } > < Link to = '/' > Submit < /Link></button >
            <
            /form> < /
            div >
            <
            /div>
        )
    }
}

export default UpdateInfoFields;