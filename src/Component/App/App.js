import React from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import LoginContainer from "../Login/LoginContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import MessageContainer from "../Message/MessageContainer";
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Nav from "../Nav/Nav";
import {initializeApp} from "../../Redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";

import './App.css'


class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return (
                <div className="container">
                    <div className="center">
                        <Preloader />
                    </div>
                </div>
            )
        }

        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
}


const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);