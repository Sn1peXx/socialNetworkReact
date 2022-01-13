import {connect} from "react-redux";

import {sendMessageCreator} from "../../Redux/messageReducer";
import Message from "./Message";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getMessageChat, getMessageData} from "../../Redux/Selectors/messageSelector";


const mapStateToProps = state => {
    return {
        messageUserData: getMessageData(state),
        messageUserChat: getMessageChat(state),
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
