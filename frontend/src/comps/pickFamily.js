import React, { Component } from "react"

class PickFamily extends Component {
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
            Address: { this.props.pick.address } < /p> <
            hr / >
            <
            /div>
        )
    }
}

export default PickFamily;