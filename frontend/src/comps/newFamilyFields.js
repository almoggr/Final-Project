import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewFamilyFields extends Component {
    constructor() {
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
            required / > < br / > ID: < input type = "text"
            name = "ID"
            onChange = { this.props.handleChange }
            required / > < br / > Address: < input type = "text"
            name = "address"
            onChange = { this.props.handleChange }
            required / > < br / > city: < input type = "text"
            name = "city"
            onChange = { this.props.handleChange }
            required / > < br / > remarks: < input type = "text"
            name = "remarks"
            onChange = { this.props.handleChange }
            /><br/ > Email: < input type = "email"
            name = "mail"
            onChange = { this.props.handleChange }
            /><br/ > Phone: < input type = "text"
            name = "phone"
            onChange = { this.props.handleChange }
            minLength = { 10 }
            /><br/ > Home Phone: < input type = "text"
            name = "hphone"
            onChange = { this.props.handleChange }
            /> </p >
            <
            button type = 'submit' > Submit < /button> <
            /form> <
            /div>
        )
    }
}

export default NewFamilyFields;