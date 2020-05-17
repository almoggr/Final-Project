import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../comps/header";
import familyData from "../datas/familiesData";
import Families from "../comps/families";
import TopNav from "../comps/topNav";
import InfoNav from "../comps/infoNav";
import '../style/info.css';

class FamiliesInfo extends Component {
    constructor() {
        super();
        this.state = {
            title: "Families Info",
            families: familyData,
            loading: true,
            men: ""
        }
        this.deleteFamily = this.deleteFamily.bind(this)
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ men: data.results[0], loading: false })
    }


    deleteFamily(id) {
        let family = []
        for (let i = 0; i < this.state.families.length; i++) {
            if (this.state.families[i].id !== id) {
                family.push(this.state.families[i])
            }
        }
        this.setState({
            families: family
        })
    }

    render() {
        const family = this.state.families.map((family) => < Families key = { family.id }
            family = { family }
            deleteFamily = { this.deleteFamily }
            />)

            const newFamily = '/familiesinfo/newfamily'

            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = { this.state.title } > < /Header> <
                InfoNav > < /InfoNav> <
                div className = "box" > { family } <
                button > < Link to = { newFamily } > New Family < /Link ></button >
                <
                /div > < /
                div >
            )
        }
    }

    export default FamiliesInfo;