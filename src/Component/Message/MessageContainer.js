import {connect} from "react-redux";

import {sendMessageCreator} from "../../Redux/messageReducer";
import Message from "./Message";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Message)
