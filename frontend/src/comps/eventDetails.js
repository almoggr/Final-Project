import React, { Component } from 'react'

class EventDetails extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "fields" >
            <
            p > Date: < input type = "date"
            name = "date"
            onChange = { this.props.handleChange }
            /><br/ > Time: < input type = "text"
            name = "time"
            onChange = { this.props.handleChange }
            /> <br/ > Default event: < input type = "radio"
            name = "default"
            value = "true"
            checked = { this.props.default === true }
            onChange = { this.props.handleChange }
            /> Yes <
            input type = "radio"
            name = "default"
            value = "false"
            checked = { this.props.default === false }
            onChange = { this.props.handleChange }
            /> No </p >
            <
            /div>
        )
    }
}

export default EventDetails;