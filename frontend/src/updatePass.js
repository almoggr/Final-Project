import React, { Component } from 'react';
import Header from "./comps/header";
import TopNav from "./comps/topNav";
import UpdatePassFields from "./comps/updatePassFields";
import workersData from './datas/workersData';
import familiesData from './datas/familiesData';
import './style/fields.css';

const formValid = status => {
    let valid = true;
    Object.values(status).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}


class UpdatePass extends Component {
    constructor() {
        super()
        this.state = {
            prevPass: "",
            newPass1: "",
            newPass2: "",
            formErrors: {
                prevPass: "",
                newPass1: "",
                newPass2: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'prevPass':
                formErrors.prevPass = value.length < 6 && value.length > 0 ? "Error" : "";
                break;
            case 'newPass1':
                formErrors.newPass1 = value.length < 6 && value.length > 0 ? "Error" : "";
                break;
            case 'newPass2':
                formErrors.newPass2 = value === this.state.newPass1 ? "" : "Erroe";
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
            Header title = "Update Password" > < /Header> <
            div class = "details" > <
            UpdatePassFields handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit } > < /UpdatePassFields> <
            /div> < /
            div >
        )
    }
}

export default UpdatePass;