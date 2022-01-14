import React, {useEffect} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import LoginContainer from "../Login/LoginContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import MessageContainer from "../Message/MessageContainer";
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Nav from "../Nav/Nav";
import {initializeApp} from "../../Redux/appReducer";
import {initializedData} from "../../Redux/Selectors/appSelector";
import Preloader from "../Common/Preloader/Preloader";

import './App.css'


const App = (props) => {

    useEffect(() => {
        props.initializeApp();
    }, [props.initialized]);


    if (!props.initialized) {
        return (
            <div className="container">
                <div className="center">
                    <Preloader />
                </div>
            </div>
        )
    }

    return (
        <div className="main">
            <HeaderContainer />
            <div className="container">
                <div className="wrapper">
                    <Nav />
                    <Switch>
                        <Route path="/profile/:userId?"
                           render={() => <ProfileContainer /> }
                        />
                        <Route path="/message/"
                           render={() => <MessageContainer /> }
                        />
                        <Route path="/users"
                           render={() => <UsersContainer /> }
                        />
                        <Route path="/login"
                           render={() => <LoginContainer /> }
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        initialized: initializedData(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);