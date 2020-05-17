import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from "./comps/topNav";
import SideNav from "./comps/sideNav";
import InfoNav from "./comps/infoNav";
import Header from "./comps/header";
import SignUp from './Sign-Up';
import SignIn from './Sign-In';
import WorkerInfo from './infos/WorkerInfo';
import FamilyInfo from './infos/familiesInfo';
import BasketInfo from './infos/basketInfo';
import EventInfo from './infos/eventsInfo';
import MyInfo from './infos/myInfo';
import NewWorker from './newWorker';
import NewBasket from './newBasket';
import NewFamily from './newFamily';
import UpdatePass from './updatePass';
import UpdateInfo from './UpdateInfo';
import RoutesInfo from './infos/routesInfo';
import AllRouteInfo from './infos/allRoutesInfo';
import NextEvents from './nextEvents';
import MakeBaskets from './makeBaskets';
import MakeEvent from './makeEvent';
import MyEvents from './infos/myEvents';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return ( <
        Router >
        <
        div className = "homepage" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        />  <
        Route path = "/home"
        exact component = { Welcome }
        /> <
        Route path = "/signin"
        component = { SignIn }
        /> <
        Route path = "/signup"
        component = { SignUp }
        /> <
        Route path = "/workerinfo"
        exact component = { WorkerInfo }
        /> <
        Route path = "/makebaskets"
        exact component = { MakeBaskets }
        /> <
        Route path = "/allroutesinfo"
        exact component = { AllRouteInfo }
        /> <
        Route path = "/familiesinfo"
        exact component = { FamilyInfo }
        /> <
        Route path = "/basketinfo"
        exact component = { BasketInfo }
        /> <
        Route path = "/eventinfo"
        exact component = { EventInfo }
        /> <
        Route path = "/myinfo"
        exact component = { MyInfo }
        /> <
        Route path = "/routesinfo"
        exact component = { RoutesInfo }
        /> <
        Route path = "/workerinfo/newworker"
        component = { NewWorker }
        /> <
        Route path = "/basketinfo/newbasket"
        component = { NewBasket }
        />  <
        Route path = "/familiesinfo/newfamily"
        component = { NewFamily }
        /> <
        Route path = "/myevents"
        component = { MyEvents }
        /> <
        Route path = "/myinfo/updateinfo"
        component = { UpdateInfo }
        /> <
        Route path = "/myinfo/updatepass"
        component = { UpdatePass }
        /> <
        Route path = "/makeevent"
        component = { MakeEvent }
        /> < /
        Switch > <
        /div > < /
        Router >
    )
}

const Welcome = () => ( <
    div className = "welcome" >
    <
    TopNav > < /TopNav> <
    Header title = "Welcome to BoxIt" > < /Header> <
    SideNav > < /SideNav> <
    NextEvents > < /NextEvents>  <
    InfoNav > < /InfoNav> < /
    div >
)

const Home = () => ( <
    div className = "home" >
    <
    TopNav > < /TopNav> <
    Header title = "Welcome to BoxIt" > < /Header> <
    NextEvents > < /NextEvents>  < /
    div >
)
export default HomePage;