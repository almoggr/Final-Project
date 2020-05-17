import React, { Component } from 'react';
import TopNav from './comps/topNav';
import Header from './comps/header';
import eventData from './datas/eventData';
import ShowBasketFood from './comps/showBasketFood';
import SideNav from './comps/sideNav';

class MakeBaskets extends Component {
    constructor() {
        super()
        this.state = {
            lading: true,
            events: "",
            todayEvent: [],
            families: []
        }
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ events: data.results, loading: false })
    }

    componentWillMount() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        for (let i = 0; i < this.state.events.length; i++) {
            if (this.state.events[i].date === date) {
                this.state.todayEvent.push(this.state.events[i])
            }
        }
        for (let i = 0; i < this.state.todayEvent.length; i++) {
            for (let j = 0; j < this.state.todayEvent[i].routes.length; j++) {
                if (this.state.todayEvent[i].routes[j].manager.id == localStorage.getItem('id')) {
                    for (let k = 0; k < this.state.todayEvent[i].routes[j].families.length; k++) {
                        this.state.families.push(this.state.todayEvent[i].routes[j].families[k])
                    }
                }
            }
        }
    }

    render() {
        console.log(this.state.events)
        const family = this.state.families.map((family, key) => < ShowBasketFood family = { family }
            key = { key }
            />)
            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = "Make Baskets" > < /Header> <
                SideNav > < /SideNav> { family } < /
                div >
            )
        }
    }

    export default MakeBaskets;