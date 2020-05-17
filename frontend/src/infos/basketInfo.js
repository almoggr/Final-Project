import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../comps/header";
import basketData from "../datas/basketsData";
import TopNav from "../comps/topNav";
import InfoNav from "../comps/infoNav";
import Basket from '../comps/basket';
import '../style/info.css';

class BasketInfo extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            baskets: basketData,
            men: []
        }
        this.deleteBasket = this.deleteBasket.bind(this)
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ men: data.results[0], loading: false })
    }

    deleteBasket(code) {
        let basket = []
        for (let i = 0; i < this.state.baskets.length; i++) {
            if (this.state.baskets[i].code !== code) {
                basket.push(this.state.baskets[i])
            }
        }
        this.setState({
            baskets: basket
        })
    }

    render() {
            const basket = this.state.baskets.map((basket) => < Basket key = { basket.code }
                    basket = { basket }
                    deleteBasket = { this.deleteBasket }
                    />)

                    const newBasket = '/basketinfo/newbasket'

                    return ( <
                            div >
                            <
                            TopNav > < /TopNav> <
                            Header title = "Basket Info" > < /Header> <
                            InfoNav > < /InfoNav> <
                            div className = "box" >
                            <
                            div className = "info" > {
                                this.state.loading || !this.state.men ? ( < div > loading... < /div >):
                                    ( < div > { basket } < /div>)} < /
                                        div > <
                                        button > < Link to = { newBasket } > New Basket < /Link ></button >

                                        <
                                        /div> < /
                                        div >
                                    )
                                }
                            }

                            export default BasketInfo;