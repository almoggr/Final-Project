import React, { Component } from 'react';
import TopNav from '../comps/topNav';
import Header from '../comps/header';
import SideNav from '../comps/sideNav';
import RoutesShow from '../comps/routeShow';
import eventData from '../datas/eventData';

class AllRoutesInfo extends Component {
    constructor() {
        super()
        this.state = {
            events: eventData,
            todayRoutes: [],
            todayEvent: [],
            loading: true,

            men: ""
        }
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ men: data.results[0], loading: false })
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
                this.state.todayRoutes.push(this.state.todayEvent[i].routes[j])
            }
        }
    }
    render() {
        const routes = this.state.todayRoutes.map((route, key) => < RoutesShow key = { key }
            route = { route }
            />)
            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = "All Routes Info" > < /Header> <
                SideNav > < /SideNav>  {
                routes
            } < /
            div >
        )
    }
}

export default AllRoutesInfo;