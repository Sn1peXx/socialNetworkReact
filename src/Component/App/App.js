import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Message from "../Message/Message";
import UsersContainer from "../Users/UsersContainer";

import './App.css'
import ProfileContainer from "../Profile/Main/ProfileContainer";


const App = ({dispatch, store}) => {

    const {messagesPage, profilePage, usersPage} = store;

    return (
        <BrowserRouter>
                <div className="main">
                    <Header />
                    <div className="container">
                        <div className="wrapper">
                            <Nav />
                            <Switch>
                                <Route path="/profile/:userId">
                                    <ProfileContainer
                                        userPosts={profilePage.userPosts}
                                        profile={profilePage.profile}
                                        dispatch={dispatch}
                                    />
                                </Route>
                                <Route path="/message">
                                    <Message
                                        messageUserData={messagesPage.messageUserData}
                                        messageUserChat={messagesPage.messageUserChat}
                                        dispatch={dispatch}
                                    />
                                </Route>
                                <Route path="/users">
                                    <UsersContainer
                                        users={usersPage.users}
                                        currentPage={usersPage.currentPage}
                                        isFetching={usersPage.isFetching}
                                        dispatch={dispatch}
                                    />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    )
}

export default App;