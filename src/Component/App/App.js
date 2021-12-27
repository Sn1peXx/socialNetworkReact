import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import './App.css'
import Nav from "../Nav/Nav";
import Main from "../Profile/Main/Main";
import Message from "../Message/Message";

const App = () => {
    return (
        <BrowserRouter>
                <div className="main">
                    <Header />
                    <div className="container">
                        <div className="wrapper">
                            <Nav />
                            <Routes>
                                <Route path="/profile" element={<Main/>}/>
                                <Route path="/message" element={<Message/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
        </BrowserRouter>

    )
}

export default App;