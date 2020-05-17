import React, { Component } from 'react';

class NewBasket extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "NextEvent" >
            <
            p >
            Event Date: { this.props.event.date } <
            /p>  < /
            div >
        )
    }
}

export default NewBasket;