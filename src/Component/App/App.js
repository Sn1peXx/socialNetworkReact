import {BrowserRouter, Route, Switch} from "react-router-dom";

import Nav from "../Nav/Nav";
import ProfileContainer from "../Profile/Main/ProfileContainer";
import MessageContainer from "../Message/MessageContainer";
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginPage from "../Login/Login";

import './App.css'


const App = () => {

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
                                   render={() => <LoginPage /> }
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;