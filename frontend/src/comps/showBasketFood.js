import React, { Component } from "react"

class ShowBasketFood extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        const food = this.props.family.dose.basicFood.map(function(food) { return food })
        return ( <
            div className = "info" >
            <
            p > The Address: {
                this.props.family.address
            } < br / >

            The Food: { food + "" } < /p> < /
            div >
        )
    }
}

export default ShowBasketFood;