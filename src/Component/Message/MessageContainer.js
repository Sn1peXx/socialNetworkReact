import {connect} from "react-redux";

import {sendMessageCreator} from "../../Redux/messageReducer";
import Message from "./Message";


const mapStateToProps = state => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessageCreator: (text) => {
            dispatch(sendMessageCreator(text))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;