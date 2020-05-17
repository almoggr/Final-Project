import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdatePassFields extends Component {
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
            p > Last pass: < input type = "text"
            name = "prevPass"
            onChange = { this.props.handleChange }
            minLength = { 6 }
            /><br/ >
            New pass: < input type = "text"
            name = "newPass1"
            onChange = { this.props.handleChange }
            minLength = { 6 }
            /><br/ >
            New pass: < input type = "text"
            name = "newPass2"
            onChange = { this.props.handleChange }
            minLength = { 6 }
            /><br/ >
            <
            button type = "submit" > Submit < /button> <
            /p> <
            /form > <
            /div>
        )
    }
}

export default UpdatePassFields;