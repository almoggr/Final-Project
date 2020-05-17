import React, { Component } from 'react'

class AllMyInfo extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return ( <
            div className = "info" >
            <
            p > My name: { this.props.me.name } < /p> <
            p > My id: { this.props.me.id } < /p> <
            p > My address: { this.props.me.address } < /p> <
            p > My Phone: { this.props.me.phone } < /p> <
            p > My role: { this.props.me.able === 0 ? "manager" : this.props.me.able === 1 ? "staff" : "volenteer" } < /p> <
            p > I Have car: { this.props.me.car ? "yes" : "no" } < /p> < /
            div >

        )
    }
}

export default AllMyInfo;