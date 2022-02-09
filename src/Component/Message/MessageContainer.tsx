import {connect} from "react-redux";
import {compose} from "redux";

// @ts-ignore
import {sendMessageCreator} from "../../Redux/messageReducer.ts";
// @ts-ignore
import Message from "./Message.tsx";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getMessageChat, getMessageData} from "../../Redux/Selectors/messageSelector";


const mapStateToProps = state => {
    return {
        messageUserData: getMessageData(state),
        messageUserChat: getMessageChat(state),
    }
}

export default compose(
    connect(mapStateToProps, {sendMessageCreator}),
    WithAuthRedirect
)(Message)
