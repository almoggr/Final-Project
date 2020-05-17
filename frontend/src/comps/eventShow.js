import React, { Component } from 'react'

class EventShow extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "info" >
            <
            p > The date is: { this.props.route.date } <
            button onClick = {
                () => this.props.details(this.props.route.date)
            } > Detail < /button> </p >
            <
            /div >
        )
    }
}

export default EventShow;