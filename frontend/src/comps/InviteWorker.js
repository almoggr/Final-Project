import React, { Component } from "react";

class InviteWorker extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return ( <
            div className = "invite" >
            <
            p > < input type = "checkbox"
            onChange = {
                () => this.props.invite(this.props.pick)
            }
            />
            Name: { this.props.pick.name },
            role: { this.props.pick.able === 0 ? "manager" : this.props.pick.able === 1 ? "staff" : "volenteer" },
            car: { this.props.pick.car ? "yes" : "no" } < /p> <
            hr / >
            <
            /div>
        )
    }
}

export default InviteWorker;