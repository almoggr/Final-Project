import React, { Component } from 'react';
import Header from "./comps/header";
import eventData from './datas/eventData';
import familiesData from "./datas/familiesData";
import TopNav from "./comps/topNav";
import PickMan from "./comps/pickMan";
import PickDriver from "./comps/pickDriver";
import PickWorker from "./comps/pickWorker";
import PickFamily from "./comps/pickFamily";
import DistShow from './comps/distShow';
import workersData from './datas/workersData';

class DistRoutes extends Component {
    constructor() {
        super();
        this.state = {
            allworkers: workersData,
            events: eventData,
            families: familiesData,
            route: [],
            distManager: "",
            distDriver: "",
            distWorker: [],
            distFamilies: [],
            managers: [],
            drivers: [],
            workers: [],

        }
        this.picksMan = this.picksMan.bind(this);
        this.pickDrive = this.pickDrive.bind(this);
        this.picksWork = this.picksWork.bind(this);
        this.pickFam = this.pickFam.bind(this);
        this.makeRoute = this.makeRoute.bind(this);
        this.deleteMan = this.deleteMan.bind(this);
        this.deleteDriver = this.deleteDriver.bind(this);
        this.stay = this.stay.bind(this);
    }

    picksMan(manId) {
        if (this.state.distManager === "") {
            this.setState({
                distManager: manId
            })
        } else { alert("have a manager") }
    }

    deleteMan() {
        this.setState({
            distManager: ""
        })
    }

    pickDrive(driverId) {
        if (this.state.distDriver === "") {
            this.setState({
                distDriver: driverId
            })
        } else { alert("have a driver") }
    }

    deleteDriver() {
        this.setState({
            driver: ""
        })
    }

    picksWork(newWork) {
        for (let i = 0; i < this.state.distWorker.length; i++) {
            if (this.state.distWorker[i].id === newWork.id) {
                let picks = this.state.distWorker.filter(function(worker) { return worker.id !== newWork.id })
                this.setState({
                    distWorker: picks
                })
            }
        }
        this.state.distWorker.push(newWork);
    }

    pickFam(newFam) {
        for (let i = 0; i < this.state.distFamilies.length; i++) {
            if (this.state.distFamilies[i].id === newFam.id) {
                let picks = this.state.distFamilies.filter(function(family) { return family.id !== newFam.id })
                this.setState({
                    family: picks
                })
            }
        }
        this.state.distFamilies.push(newFam);
    }

    componentWillMount() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        let event = []
        let staffs = []
        for (let i = 0; i < this.state.allworkers.length; i++) {
            if (this.state.allworkers[i].id == localStorage.getItem('id')) {
                for (let j = 0; j < this.state.events.length; j++) {
                    if (this.state.events[j].date === date) {
                        event.push(this.state.events[j])
                    }
                }
                for (let j = 0; j < event.length; j++) {
                    for (let k = 0; k < event[j].staff.length; k++) {
                        staffs.push(event[j].staff[k])
                    }
                }
                for (let j = 0; j < staffs.length; j++) {
                    if (staffs[j].able < 2) {
                        this.state.managers.push(staffs[j])
                    }
                }
                for (let j = 0; j < staffs.length; j++) {
                    if (staffs[j].car) {
                        this.state.drivers.push(staffs[j])
                    }
                }
                for (let j = 0; j < staffs.length; j++) {
                    this.state.workers.push(staffs[j])
                }
            }
        }
    }

    stay() {
        var family = []
        var sfamily = []
        var work = []
        var mans = []
        work = this.state.workers
        family = this.state.families
        for (let i = 0; i < this.state.route.length; i++) {
            let manId = this.state.route[i].manager.id
            let driverId = this.state.route[i].driver.id
            for (let j = 0; j < this.state.managers.length; j++) {
                let man = this.state.managers.filter(function(manager) { return manager.id !== manId })
                this.setState({
                    managers: man
                })
            }
            for (let j = 0; j < this.state.drivers.length; j++) {
                let dri = this.state.drivers.filter(function(driver) { return driver.id !== driverId })
                this.setState({
                    drivers: dri
                })
            }
            for (let j = 0; j < this.state.route[i].workers.length; j++) {
                for (let k = 0; k < work.length; k++) {
                    if (this.state.route[i].workers[j].id !== work[k].id) {
                        mans.push(work[k])
                    }
                }
                work = mans
                mans = []
            }
            for (let j = 0; j < this.state.route[i].families.length; j++) {
                for (let k = 0; k < family.length; k++) {
                    if (this.state.route[i].families[j].id !== family[k].id) {
                        sfamily.push(family[k])
                    }
                }
                family = sfamily
                sfamily = []
            }
        }
        this.setState({
            workers: work,
            families: family
        })
    }


    makeRoute() {
        this.state.route.push({
            manager: this.state.distManager,
            driver: this.state.distDriver,
            workers: this.state.distWorker,
            families: this.state.distFamilies
        })
        this.setState({
            distManager: "",
            distDriver: "",
            distWorker: [],
            distFamilies: []
        })
        this.stay()
    }

    render() {
            const PickManager = this.state.managers.map(manager => < PickMan key = { manager.id }
                    manager = { manager }
                    pickedMan = { this.picksMan }
                    />)

                    const PickDrive = this.state.drivers.map(driver => < PickDriver key = { driver.id }
                            driver = { driver }
                            pickDrive = { this.pickDrive }
                            />)

                            const pickWork = this.state.workers.map(pick => < PickWorker key = { pick.id }
                                    pick = { pick }
                                    invite = { this.picksWork }
                                    />)

                                    const pickFamilies = this.state.families.map(pick => < PickFamily key = { pick.id }
                                        pick = { pick }
                                        invite = { this.pickFam }
                                        />)

                                        const routesInfo = this.state.route.map((route, key) => < DistShow key = { key }
                                            route = { route }
                                            />) 

                                            return ( <
                                                div className = "Workers" >
                                                <
                                                TopNav > < /TopNav> <
                                                Header title = "Make Routes" > < /Header> { routesInfo } <
                                                h3 > Pick Manager of route: < /h3> <
                                                h5 > The manager is: { this.state.distManager.name } < /h5> { PickManager } <
                                                button onClick = { this.deleteMan } > new man < /button> <
                                                h3 > Pick Driver
                                                for the route: < /h3> <
                                                h5 > The driver is: { this.state.distDriver.name } < /h5> { PickDrive } <
                                                button onClick = { this.deleteDriver } > new driver < /button> <
                                                h3 > Pick 3 worker
                                                for the route: < /h3> { pickWork } <
                                                h3 > Pick 3 families
                                                for the route: < /h3> { pickFamilies } <
                                                button onClick = { this.makeRoute } > Make route < /button> < /
                                                div >
                                            )
                                        }
                                    }

                                    export default DistRoutes;