import React, { Component } from 'react';
import eventsData from './datas/eventData';
import NextEventDetails from './comps/nextEventDetails';
import './style/nextEvents.css';

class NewEvents extends Component {
    constructor() {
        super()
        this.state = {
            events: eventsData
        }
    }

    render() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        const next = this.state.events.filter(function(event) { return event.date > date })
        const event = next.map((event, key) => < NextEventDetails key = { key }
            event = { event }
            />)
            return ( <
                div className = "NewEvents" >
                <
                h2 > Next Events < /h2> { event } < /
                div >
            )
        }
    }

    export default NewEvents;