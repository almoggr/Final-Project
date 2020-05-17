import React, { Component } from 'react'

class AllMyFamilyInfo extends Component {
    render() {
        return ( <
            div className = "info" >
            <
            p > My name: { this.props.me.name } < br / >
            My id: { this.props.me.id } < br / >
            My address: { this.props.me.address } < br / >
            My remarks: { this.props.me.remarks } < br / >
            My Phone: { this.props.me.phone } < br / >
            Home phone: { this.props.me.hphone } < br / >
            Number souls: { this.props.me.souls } < /p> < /
            div >
        )
    }
}

export default AllMyFamilyInfo;