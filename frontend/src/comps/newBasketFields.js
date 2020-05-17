import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NewBasketFields extends Component {
    constructor(props) {
        super()
        this.state = {}
    }
    render() {
        let food = this.props.basicFood.map(function(food) { return food })
        return ( <
            div className = "fields" >
            <
            form onSubmit = { this.props.handleSubmit } >
            <
            p > The Food is: { food + "" } < br / >
            Basic Food: < input type = "text"
            name = "food"
            onChange = { this.props.handleChange }
            /> <
            button onClick = { this.props.newFood } > new Food < /button><br/ >
            Name: < input type = "text"
            name = "name"
            onChange = { this.props.handleChange }
            required / > < br / >
            Min Souls: < input type = "text"
            name = "minSouls"
            onChange = { this.props.handleChange }
            required / > < br / >
            Max Souls: < input type = "text"
            name = "maxSouls"
            onChange = { this.props.handleChange }
            required / > < /p> <
            button type = "submit" > Submit < /button> <
            /form> <
            /div>
        )
    }
}

export default NewBasketFields;