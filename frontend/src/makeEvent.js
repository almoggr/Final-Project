import React, { Component } from 'react';
import Header from "./comps/header";
import workerData from "./datas/workersData";
import TopNav from "./comps/topNav";
import InviteWorker from "./comps/InviteWorker";
import EventDetails from "./comps/eventDetails";
import './style/fields.css';

class MakeEvent extends Component {
    constructor() {
        super()
        this.state = {
            workers: workerData,
            pickWorker: [],
            date: "",
            time: "",
            default: true,
        }
        this.newWork = this.newWork.bind(this)
        this.sendInvite = this.sendInvite.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        if (name === "default") {
            if (value === "true") {
                this.setState({ default: true })
            } else { this.setState({ default: false }) }
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    newWork = (newVal) => {
        for (let i = 0; i < this.state.pickWorker.length; i++) {
            if (this.state.pickWorker[i].id === newVal.id) {
                let picks = this.state.pickWorker.filter(function(worker) { return worker.id !== newVal.id })
                this.setState({
                    pickWorker: picks
                })
            }
        }
        this.state.pickWorker.push(newVal);
    }


    sendInvite = () => {}

    render() {
        const picks = this.state.workers.map(pick => < InviteWorker key = { pick.id }
            pick = { pick }
            invite = { this.newWork }
            />)

            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = "Make Event" > < /Header> <
                div class = "details" >
                <
                EventDetails handleChange = { this.handleChange }
                default = { this.state.default } > < /EventDetails> <
                div className = "picks" > { this.state.default ? "" : picks } <
                /div> <
                button onClick = { this.sendInvite } > Send < /button> <
                /div> <
                /div>
            )
        }
    }

    export default MakeEvent;