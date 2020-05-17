import React, { Component } from 'react'

class DistShow extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        var add = this.props.route.families.map(function(route) { return route.address })
        var work = this.props.route.workers.map(function(route) { return route.name })
        return ( <
            div className = "info" >
            <
            p > the manager is: { this.props.route.manager.name } < /p> <
            p > the driver: { this.props.route.driver.name } < /p> <
            p > the workers: { work + "" } < /p> <
            p > The addresses: { add + "" } < /p> < /
            div >

        )
    }
}

export default DistShow;