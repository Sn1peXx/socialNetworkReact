import ReactDOM from "react-dom";

import App from "./Component/App/App";
import store from "./Redux/reduxStore";

import './index.css'


const renderEntireTree = () => {
    ReactDOM.render(
        <>
            <App store={store.getState()} dispatch={store.dispatch.bind(store)} />
        </>,
        document.getElementById('root')
    )
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
