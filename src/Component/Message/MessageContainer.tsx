import {connect} from "react-redux";
import {compose} from "redux";

// @ts-ignore
import {sendMessageCreator} from "../../Redux/messageReducer.ts";
// @ts-ignore
import Message from "./Message.tsx";
// @ts-ignore
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect.tsx";
import {getMessageChat, getMessageData} from "../../Redux/Selectors/messageSelector";


const mapStateToProps = state => {
    return {
        messageUserData: getMessageData(state),
        messageUserChat: getMessageChat(state),
    }
}

export default compose<any>(
    connect(mapStateToProps, {sendMessageCreator}),
    WithAuthRedirect
)(Message)
