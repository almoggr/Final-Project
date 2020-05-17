import React, { Component } from 'react';
import SignUpFields from "./comps/SignUpFields";
import TopNav from "./comps/topNav";
import workersData from './datas/workersData';
import axios from 'axios';
import './style/Sign.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&*+/=?_{|}~-]+@[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = status => {
    let valid = true;
    Object.values(status).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            ID: "",
            address: "",
            mail: "",
            pass: "",
            phone: "",
            birthday: "",
            car: "",
            formErrors: {
                fullName: "",
                ID: "",
                address: "",
                mail: "",
                pass: "",
                phone: "",
            },
            workers: workersData
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target

        let formErrors = this.state.formErrors;

        switch (name) {
            case 'mail':
                formErrors.mail = emailRegex.test(value) && value.length > 0 ? "" : "Error";
                break;
            case 'pass':
                formErrors.pass = value.length < 6 && value.length > 0 ? "Error" : "";
                break;
            case 'fullName':
                formErrors.fullName = value.length < 3 ? "Error" : "";
                break;
            case 'ID':
                formErrors.ID = value.length < 8 && value.length > 9 ? "Error" : "";
                break;
            case 'address':
                formErrors.address = value.length > 0 ? "" : "Error";
                break;
            case 'phone':
                formErrors.phone = value.length > 10 ? "" : "Error";
                break;
            default:
                break;
        }

        type === "checkbox" ? this.setState({
                [name]: checked
            }) :
            this.setState({ formErrors, [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            axios.post('')
                .then(res => console.log(res.data))
            window.location = '/';
        } else {
            window.location.reload()
        }

    }

    render() {
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            div className = "Sign" >
            <
            div className = "head" >
            <
            h4 > Sign Up < /h4> < /
            div > <
            SignUpFields car = { this.state.car }
            handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit } > < /SignUpFields> < /
            div > <
            /div>    
        )
    }
}

export default SignUp;