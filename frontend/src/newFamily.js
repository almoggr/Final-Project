import React, { Component } from 'react';
import Header from "./comps/header";
import TopNav from "./comps/topNav";
import NewFamilyFields from "./comps/newFamilyFields";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&*+/=?_{|}~-]+@[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = status => {
    let valid = true;
    Object.values(status).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class NewFamily extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            ID: "",
            address: "",
            remarks: "",
            mail: "",
            phone: "",
            hphone: "",
            formErrors: {
                fullName: "",
                ID: "",
                mail: "",
                pass: "",
                address: "",
                phone: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
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
                formErrors.ID = value.length < 8 || value.length > 10 ? "Error" : "";
                break;
            case 'phone':
                formErrors.phone = value.length < 10 || value.length > 10 ? "Error" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            alert('submit')
        } else {
            window.location.reload()
        }
    }

    render() {
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            Header title = "New Family" > < /Header> <
            div className = "details" > <
            NewFamilyFields handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit } > < /NewFamilyFields>  < /
            div > < /
            div >
        )
    }
}

export default NewFamily;