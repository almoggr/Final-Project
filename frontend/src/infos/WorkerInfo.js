import React, { Component } from 'react';
import Header from "../comps/header";
import Workers from "../comps/workers";
import TopNav from "../comps/topNav";
import InfoNav from "../comps/infoNav";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/info.css';

class WorkerInfo extends Component {
    constructor() {
        super();
        this.state = {
            workers: [],
            loading: true,

            men: ""
        }
        this.upgradeWorker = this.upgradeWorker.bind(this)
        this.downWorker = this.downWorker.bind(this)
        this.deleteWorker = this.deleteWorker.bind(this)
    }

    componentDidMount() {
            axios.get('')
                .then(response => {
                    this.setState({
                            workers: response.data
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
        }
        // async componentDidMount() {
        //     const url = "https://api.randomuser.me/";
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     this.setState({ men: data.results[0], loading: false })
        // }

    upgradeWorker(id) {
        this.setState(prevState => {
            const updateWorkers = prevState.workers.map(worker => {
                if (worker.id === id && worker.able > 0) {
                    worker.able = worker.able - 1
                }
                return worker
            })
            return {
                workers: updateWorkers
            }
        })
    }

    downWorker(id) {
        this.setState(prevState => {
            const updateWorkers = prevState.workers.map(worker => {
                if (worker.id === id && worker.able < 3) {
                    worker.able = worker.able + 1
                }
                return worker
            })
            return {
                workers: updateWorkers
            }
        })
    }

    deleteWorker(id) {
        axios.delete('' + id)
            .then(res => console.log(res.data));
        this.setState({
                workers: this.state.workers.filter(el => el.id !== id)
            })
            // let worker = []
            // for (let i = 0; i < this.state.workers.length; i++) {
            //     if (this.state.workers[i].id !== id) {
            //         worker.push(this.state.workers[i])
            //     }
            // }
            // this.setState({
            //     workers: worker
            // })
    }

    render() {
        const workers = this.state.workers.map((worker, key) => < Workers key = { key }
            worker = { worker }
            upgradeWorker = { this.upgradeWorker }
            downWorker = { this.downWorker }
            deleteWorker = { this.deleteWorker }
            />)

            const newWork = '/workerinfo/newworker'

            return ( <
                div >
                <
                TopNav > < /TopNav> <
                Header title = "Worker Info" > < /Header> <
                InfoNav > < /InfoNav> <
                div className = "box" > { workers } < button > < Link to = { newWork } > New Worker < /Link ></button > < /
                div >
                <
                /div>
            )
        }
    }

    export default WorkerInfo;