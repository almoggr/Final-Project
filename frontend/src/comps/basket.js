import React, { Component } from "react"

class Basket extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        const food = this.props.basket.basicFood.map(function(food) { return food })
        return ( <
            div >
            <
            p > Name: { this.props.basket.name },
            Code: { this.props.basket.code },
            food: { food + "" },
            minSouls: { this.props.basket.minSouls },
            maxSouls: { this.props.basket.maxSouls } <
            button onClick = {
                () => this.props.deleteBasket(this.props.basket.code)
            } > Delete Basket < /button></p > <
            /div>
        )
    }

}

export default Basket;