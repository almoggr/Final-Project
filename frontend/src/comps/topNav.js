import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/topNav.css';

class TopNav extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        this.SignOut = this.SignOut.bind(this)
    }

    componentWillMount() {
        this.setState({
            name: localStorage.getItem('name')
        })
    }

    SignOut() {
        this.setState({
            name: ""
        })
        localStorage.clear()
    }



    render() {
        return ( <
            div className = "Top-Nav" >
            <
            div className = "loged" > {
                this.state.name === null || this.state.name === "" ?
                "Hello Guest" : "Hello " + this.state.name
            } <
            /div> <
            div className = "Buttons" >

            {
                this.state.name === null || this.state.name === "" ?
                <
                ul >
                <
                li > < Link to = '/' > Home Page < /Link></li >
                <
                li > < Link to = '/signin' > Sign In < /Link></li >
                <
                li > < Link to = '/signup' > Sign Up < /Link></li >
                <
                /ul>:  <
                ul >
                <
                li > < Link to = '/home' > Home Page < /Link></li >
                <
                li > < button onClick = { this.SignOut } > < Link to = { '/' } > Sign Out < /Link ></button > < /li> <
                /ul>} <
                /div> <
                /div >
            )
        }
    }

    export default TopNav;