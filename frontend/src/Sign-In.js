import React, { Component } from 'react';
import TopNav from "./comps/topNav";
import SignInFields from "./comps/signInFields";
import './style/Sign.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&*+/=?_{|}~-]+@[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = status => {
    let valid = true;
    Object.values(status).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            mail: "",
            pass: "",
            postId: "",
            formErrors: {
                mail: "",
                pass: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOption)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    handleChange(event) {
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'mail':
                formErrors.mail = emailRegex.test(value) && value.length > 0 ? "" : "Error";
                break;
            case 'pass':
                formErrors.pass = value.length < 6 && value.length > 0 ? "Error" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }


    handleSubmit(event) {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            localStorage.setItem('id', 1)
            localStorage.setItem('name', 'Almog Grosman')
        } else {
            window.location.reload()
        }

    }

    render() {
        const { postId } = this.state;
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            div > Post Id: { postId } < /div> <
            div className = "Sign" >
            <
            div className = "head" >
            <
            h4 > Sign In < /h4> < /
            div > <
            SignInFields handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit } > < /SignInFields> < /
            div > <
            /div>    
        )
    }
}

export default SignIn;