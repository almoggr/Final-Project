import React, { Component } from 'react';
import TopNav from '../comps/topNav';
import Header from '../comps/header';
import SideNav from '../comps/sideNav';
import RoutesShow from '../comps/routeShow';
import eventData from '../datas/eventData';

class RoutesInfo extends Component {
    constructor() {
        super()
        this.state = {
            events: eventData,
            todayEvent: [],
            myRoute: "",
            loading: true,

            men: ""
        }
        this.updateProcess = this.updateProcess.bind(this)
        this.checkFinish = this.checkFinish.bind(this)
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
                if (this.state.todayEvent[i].routes[j].driver.id == localStorage.getItem('id') || this.state.todayEvent[i].routes[j].manager.id == localStorage.getItem('id')) {
                    this.setState({
                        myRoute: this.state.todayEvent[i].routes[j]
                    })
                }
            }
        }
    }

    updateProcess(pNum) {
        for (let i = 0; i < this.state.todayEvent.length; i++) {
            this.setState(prevState => {
                const updateRoute = prevState.todayEvent[i].routes.map(route => {
                    if (route.manager.id === pNum && route.process <= 2) {
                        route.process = route.process + 1
                    }
                    return route
                })
                return {
                    routes: updateRoute,
                }
            })
            this.checkFinish(pNum)
        }
    }

    checkFinish(pNum) {
        for (let i = 0; i < this.state.todayEvent.length; i++) {
            this.setState(prevState => {
                const updateRoutes = prevState.todayEvent[i].routes.map(route => {
                    if (route.manager.id === pNum && route.process === 2) {
                        route.pass = true
                    }
                    return route
                })
                return {
                    routes: updateRoutes,
                }
            })
        }
    }
    render() {
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            Header title = "Routes Info" > < /Header> <
            SideNav > < /SideNav>  {
            this.state.myRoute !== "" ? <
            RoutesShow route = { this.state.myRoute }
            updateProcess = { this.updateProcess }
            title = "Routes Info" >
            <
            /RoutesShow>:""} < /
            div >
        )
    }
}

export default RoutesInfo;