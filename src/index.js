import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import App from "./Component/App/App";
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css'



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
)

serviceWorker.unregister();