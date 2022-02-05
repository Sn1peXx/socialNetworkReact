import React, {useEffect, Suspense} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HeaderContainer from "../Header/HeaderContainer";
import Nav from "../Nav/Nav";
import ProfileContainer from '../Profile/ProfileContainer.tsx'
import {initializeApp} from "../../Redux/appReducer.ts";
import {initializedData} from "../../Redux/Selectors/appSelector";
import Preloader from "../Common/Preloader/Preloader";

import './App.css'

const MessageContainer = React.lazy(() => import('../Message/MessageContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer.tsx'));
const LoginContainer = React.lazy(() => import('../Login/LoginContainer.tsx'));

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
                    </Switch>
                    <Suspense fallback={<Preloader />}>
                        <Switch>
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
                    </Suspense>
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