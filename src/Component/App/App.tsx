import {lazy, useEffect, Suspense, FC} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

// @ts-ignore
import HeaderContainer from "../Header/HeaderContainer.tsx";
// @ts-ignore
import Nav from "../Nav/Nav.tsx";
// @ts-ignore
import ProfileContainer from '../Profile/ProfileContainer.tsx'
// @ts-ignore
import {initializeApp} from "../../Redux/appReducer.ts";
// @ts-ignore
import {initializedData} from "../../Redux/Selectors/appSelector";
// @ts-ignore
import Preloader from "../Common/Preloader/Preloader.tsx";

import './App.css'

// @ts-ignore
const MessageContainer = lazy(() => import('../Message/MessageContainer.tsx'));
// @ts-ignore
const UsersContainer = lazy(() => import('../Users/UsersContainer.tsx'));
// @ts-ignore
const LoginContainer = lazy(() => import('../Login/LoginContainer.tsx'));

type PropsType = {
    initialized: boolean,
    initializeApp: () => void
}

const App: FC<PropsType> = ({initializeApp, initialized}) => {

    useEffect(() => { 
        initializeApp();
    }, [initialized]);


    if (!initialized) {
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