import React, { Component } from 'react';
import Header from "./comps/header";
import TopNav from "./comps/topNav";
import NewWorkerFields from "./comps/newWorkerFields";
import workersData from './datas/workersData';

class NewWorker extends Component {
    constructor() {
        super()
        this.state = {
            workers: workersData,
            fullName: "",
            ID: "",
            address: "",
            city: "",
            mail: "",
            phone: "",
            birthday: "",
            car: false,
            able: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }
    handleSubmit() {
        for (let i = 0; i < this.state.workers.length; i++) {
            if (this.state.workers[i].id == this.state.ID) {
                alert("have a user for this id")
                break
            } else {
                this.state.workers.push({
                    name: this.state.fullName,
                    id: this.state.ID,
                    address: this.state.address,
                    mail: this.state.mail,
                    password: "111111",
                    phone: this.state.phone,
                    able: this.state.able,
                    car: this.state.car
                })
                break
            }
        }
    }

    render() {
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            Header title = "New Worker" > < /Header> <
            div className = "details" >
            <
            NewWorkerFields handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
            car = { this.state.car }
            able = { this.state.able } >
            <
            /NewWorkerFields > < /
            div > < /
            div >
        )
    }
}

export default NewWorker;