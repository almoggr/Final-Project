import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../comps/topNav';
import Header from '../comps/header';
import InfoNav from '../comps/infoNav';
import AllMyInfo from '../comps/allMyInfo';
import workersData from '../datas/workersData';
import familiesData from '../datas/familiesData';
import AllMyFamilyInfo from '../comps/allMyFamilyInfo';
import '../style/info.css';

class MyInfo extends Component {
    constructor() {
        super()
        this.state = {
            worker: workersData,
            families: familiesData,
            me: "",
            who: "",
            loading: true,

            men: ""
        }
        this.myId = this.myId.bind(this)
        this.myFamilyID = this.myFamilyID.bind(this)
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ men: data.results[0], loading: false })
    }

    componentWillMount() {
        this.myId()
    }

    myId() {
        for (let i = 0; i < this.state.worker.length; i++) {
            if (localStorage.getItem('id') == this.state.worker[i].id) {
                this.setState({
                    me: this.state.worker[i],
                    who: "worker"
                })
                break
            }
        }
        if (this.state.who === "") {
            this.myFamilyID();
        }
    }
    myFamilyID() {
        for (let i = 0; i < this.state.families.length; i++) {
            if (localStorage.getItem('id') == this.state.families[i].id) {
                this.setState({
                    me: this.state.families[i],
                    who: "family"
                })
                break
            }
        }
    }

    render() {
            const updatePass = '/myinfo/updatepass';
            const updateInfo = '/myinfo/updateinfo';

            return ( <
                    div >
                    <
                    TopNav > < /TopNav> <
                    Header title = "info" > < /Header> <
                    InfoNav > < /InfoNav> <
                    div className = "box" > {
                        this.state.loading ?
                        ( < div > loading... < /div>):
                            ( < div > {
                                    this.state.who === "worker" ?
                                    <
                                    AllMyInfo me = { this.state.me }
                                    />: 
                                    this.state.who === "family" ?
                                    <
                                    AllMyFamilyInfo me = { this.state.me }
                                    />:""} {
                                        this.state.who === "" ? "" :
                                            <
                                            div >
                                            <
                                            button > < Link to = { updateInfo } > Update Info < /Link></button >
                                            <
                                            button > < Link to = { updatePass } > Update Pass < /Link></button >
                                            <
                                            /div>} </div > )
                                }

                                <
                                /div> <
                                /div>
                            )
                        }
                    }

                    export default MyInfo;