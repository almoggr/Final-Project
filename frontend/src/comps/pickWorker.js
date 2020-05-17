import React, { Component } from "react"

class PickWorker extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return ( <
            div className = "info" >
            <
            p > < input type = "checkbox"
            onChange = {
                () => this.props.invite(this.props.pick)
            }
            />
            Name: { this.props.pick.name },
            able: { this.props.pick.able },
            car: { this.props.pick.car ? "yes" : "no" },
            address: { this.props.pick.adress } < /p> <
            hr / >
            <
            /div>
        )
    }
}

export default PickWorker;