import React, { Component } from "react"

class PickDriver extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return ( <
            div className = "info" >
            <
            p > Name: { this.props.driver.name } <
            button onClick = {
                () => this.props.pickDrive(this.props.driver) } > Pick driver < /button></p >
            <
            hr / >
            <
            /div>
        )
    }
}

export default PickDriver;