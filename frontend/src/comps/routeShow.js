import React, { Component } from 'react';

class RouteShow extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        var add = this.props.route.families.map(function(route) { return route.address })
        var worker = this.props.route.worker.map(function(route) { return route.name })
        return ( <
            div className = "info" >
            <
            p > the manager is: { this.props.route.manager.name } < br / >
            the driver: { this.props.route.driver.name } < br / >
            The workers: { worker + "" } < br / >
            The addresses: { add + "" } < br / >
            pass: { this.props.route.pass ? "yes" : "no" } < br / >
            process: { this.props.route.process === 0 ? "in process" : this.props.route.process === 1 ? "at way" : "finish" } < br / > {
                this.props.route.manager.id == localStorage.getItem('id') && this.props.title === "Routes Info" ?
                <
                button onClick = {
                    () => this.props.updateProcess(this.props.route.manager.id)
                } > Update process < /button> :
                ""
            } < /p> <
            hr / >
            <
            /div>
        )
    }
}

export default RouteShow;