import React, { Component } from "react";

class SignInFields extends Component {
    render() {
        return ( <
            div className = "fields" >
            <
            form onSubmit = {
                this.props.handleSubmit
            }
            noValidate >
            <
            p > Email: < input type = "email"
            name = "mail"
            onChange = { this.props.handleChange }
            noValidate / > < br / >
            Password: < input type = "password"
            name = "pass"
            onChange = { this.props.handleChange }
            noValidate /
            >
            <
            /p ><
            button type = "submit" > Sign In < /button >  < /
            form > < /
            div >
        )
    }
}
export default SignInFields;