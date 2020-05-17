import React, { Component } from 'react';

class MyEventsDetails extends Component {
    constructor() {
        super()
        this.state = {
            confirm: [],
            not: []
        }
    }

    componentWillMount() {
        console.log(this.props.date)
    }

    render() {
        return ( <
            div >
            <
            p > { this.props.date } {
                this.props.no === "no" ? < button onClick = {
                    () => this.props.toConfirm(this.props.date) } > confirm < /button>:""} < /
                p > < /
                div >
            )
        }
    }

    export default MyEventsDetails;