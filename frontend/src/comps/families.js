import React, { Component } from "react"

class Families extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return ( <
            div className = "info" > < p >
            Name: { this.props.family.name },
            Id: { this.props.family.id },
            Address: { this.props.family.address },
            City: { this.props.family.city },
            Mail: { this.props.family.mail },
            Phone: { this.props.family.phone },
            basket: { this.props.family.dose.name } <
            button onClick = {
                () => this.props.deleteFamily(this.props.family.id)
            } > Delete Family < /button> <
            /p> <
            /div>
        )
    }

}

export default Families;