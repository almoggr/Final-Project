import React, { Component } from 'react';
import TopNav from '../comps/topNav';
import Header from '../comps/header';
import InfoNav from '../comps/infoNav';
import workersData from '../datas/workersData';
import MyEventsDetails from '../comps/myEventsDetails';
import '../style/info.css';

class MyEvents extends Component {
    constructor() {
        super()
        this.state = {
            workers: workersData,
            confirm: [],
            not: [],
        }
        this.toConfirm = this.toConfirm.bind(this)
    }

    componentWillMount() {
        for (let i = 0; i < this.state.workers.length; i++) {
            if (this.state.workers[i].id == localStorage.getItem('id')) {
                for (let j = 0; j < this.state.workers[i].events.length; j++) {
                    if (this.state.workers[i].events[j].confirm) {
                        this.state.confirm.push(this.state.workers[i].events[j])
                    } else {
                        this.state.not.push(this.state.workers[i].events[j])
                    }
                }
            }
        }
    }

    toConfirm(date) {
        alert(date)
    }

    render() {
        const yes = this.state.confirm.map((yes) => < MyEventsDetails key = { yes.date }
            date = { yes.date }
            />)
            const no = this.state.not.map((no) => < MyEventsDetails key = { no.date }
                date = { no.date }
                no = "no"
                toConfirm = { this.toConfirm }
                / >
            )
            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = "My Events" > < /Header> <
                InfoNav > < /InfoNav> <
                div className = "box" >
                <
                h3 > My Confirm Events: < /h3> { yes } <
                h3 > Event To Confirm < /h3> { no } < /
                div > <
                /div>
            )
        }
    }

    export default MyEvents;