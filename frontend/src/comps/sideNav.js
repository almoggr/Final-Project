import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import workersData from '../datas/workersData';

class SideNav extends Component {
    constructor() {
        super()
        this.state = {
            who: "",
            workers: workersData
        }
    }

    componentWillMount() {
        for (let i = 0; i < this.state.workers.length; i++) {
            if (this.state.workers[i].id == localStorage.getItem('id')) {
                if (this.state.workers[i].able === 0) {
                    this.setState({
                        who: "manager"
                    })
                } else if (this.state.workers[i].able === 1) {
                    this.setState({
                        who: "staff"
                    })
                } else {
                    this.setState({
                        who: "worker"
                    })
                }
            }
        }
    }

    render() {
        return ( <
            div className = "Side-Nav" >
            <
            div className = "Nav" > {
                this.state.who === "manager" ?
                <
                ul >
                <
                li > < Link to = '/makeevent' > Make Event < /Link></li >
                <
                li > < Link to = '/makebaskets' > Make Basket < /Link></li >
                <
                li > < Link to = '/routesinfo' > My Route < /Link></li >
                <
                li > < Link to = '/allroutesinfo' > All Routes < /Link></li >
                <
                /ul>:
                this.state.who !== "" ? < Link to = '/routesinfo' > Route Info < /Link> :""} < /
                div > <
                /div>
            )
        }
    }

    export default SideNav;