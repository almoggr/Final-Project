import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import workersData from '../datas/workersData';
import familiesData from '../datas/familiesData';

class InfoNav extends Component {
    constructor() {
        super()
        this.state = {
            workers: workersData,
            who: "",
            families: familiesData,
        }
        this.familyId = this.familyId.bind(this)
    }

    componentWillMount() {
        for (let i = 0; i < this.state.workers.length; i++) {
            if (this.state.workers[i].id == localStorage.getItem('id')) {
                if (this.state.workers[i].able === 0) {
                    this.setState({
                        who: "manager"
                    })
                } else {
                    this.setState({
                        who: "worker"
                    })
                }
            }
        }
        if (this.state.who === "") {
            this.familyId()
        }
    }

    familyId() {
        for (let i = 0; i < this.state.families.length; i++) {
            if (this.state.families[i].id == localStorage.getItem('id')) {
                this.setState({
                    who: "family"
                })
            }
        }
    }

    render() {
        return ( <
            div className = "Info-Nav" >
            <
            div className = "Nav" > {
                this.state.who !== "" ?
                <
                ul >
                <
                li > < Link to = '/myinfo' > My Info < /Link></li >
                <
                li > < Link to = '/myevents' > My Events < /Link></li >
                <
                /ul> : ""} {
                this.state.who === "manager" ?
                <
                ul >
                <
                li > < Link to = '/eventinfo' > Events Info < /Link></li >
                <
                li > < Link to = '/workerinfo' > Workers Info < /Link></li >
                <
                li > < Link to = '/familiesinfo' > Families Info < /Link></li >
                <
                li > < Link to = '/basketinfo' > Baskets Info < /Link></li >
                <
                /ul>: ""} < /
                div > <
                /div >
            )
        }
    }

    export default InfoNav;