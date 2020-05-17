import React, { Component } from "react"

class PickMan extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return ( <
            div className = "pickMan" >
            <
            p > Name: { this.props.manager.name },
            able: { this.props.manager.able },
            car: { this.props.manager.car ? "yes" : "no" } <
            button onClick = {
                () => this.props.pickedMan(this.props.manager)
            } > Pick manager < /button></p > <
            hr / >
            <
            /div>
        )
    }
}

export default PickMan;