import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Profile/Main/Main";
import Message from "../Message/Message";
import UsersContainer from "../Users/UsersContainer";

import './App.css'


const App = ({dispatch, store}) => {

    const {messagesPage, profilePage, usersPage} = store;

    return (
        <BrowserRouter>
                <div className="main">
                    <Header />
                    <div className="container">
                        <div className="wrapper">
                            <Nav />
                            <Routes>
                                <Route
                                    path="/profile"
                                    element={<Main
                                        userPosts={profilePage.userPosts}
                                        dispatch={dispatch}
                                    />}
                                />
                                <Route
                                    path="/message/*"
                                    element={<Message
                                        messageUserData={messagesPage.messageUserData}
                                        messageUserChat={messagesPage.messageUserChat}
                                        dispatch={dispatch}
                                    />}
                                />
                                <Route
                                    path="/users"
                                    element={<UsersContainer users={usersPage.users} dispatch={dispatch} />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    )
}

export default App;