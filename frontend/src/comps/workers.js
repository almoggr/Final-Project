import React, { Component } from "react"

class Workers extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return ( <
            div >
            <
            p > Name: { this.props.worker.name },
            Id: { this.props.worker.id },
            Adress: { this.props.worker.adress },
            Mail: { this.props.worker.mail },
            Phone: { this.props.worker.phone },
            role: { this.props.worker.able === 0 ? "manager" : this.props.worker.able === 1 ? "staff" : "volenteer" },
            Car: { this.props.worker.car ? "yes" : "no" } <
            div className = "buttons" >
            <
            button onClick = {
                () => this.props.upgradeWorker(this.props.worker.id) } > Upgrade Worker < /button> <
            button onClick = {
                () => this.props.downWorker(this.props.worker.id) } > Down Worker < /button> <
            button onClick = {
                () => this.props.deleteWorker(this.props.worker.id) } > Delete Worker < /button> <
            /div> <
            /p> <
            /div>
        )
    }

}

export default Workers;