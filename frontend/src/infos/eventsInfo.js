import React, { Component } from 'react';
import TopNav from '../comps/topNav';
import Header from '../comps/header';
import InfoNav from '../comps/infoNav';
import eventData from '../datas/eventData';
import EventShow from '../comps/eventShow';
import '../style/info.css';

class EventsInfo extends Component {
    constructor() {
        super()
        this.state = {
            events: eventData,
            loading: true,
            men: ""
        }
        this.details = this.details.bind(this)
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
        let event = this.state.events.filter(function(event) { return event.date < date })
        this.setState({
            events: event
        })
    }

    details(date) {
        alert(date)
    }

    render() {
        const route = this.state.events.map((route, key) => < EventShow key = { key }
            route = { route }
            details = { this.details }
            />
        )
        return ( <
            div >
            <
            TopNav > < /TopNav> <
            Header title = "Events Info" > < /Header> <
            InfoNav > < /InfoNav> <
            div className = "box" > { route } <
            /div> < /
            div >
        )
    }
}

export default EventsInfo;