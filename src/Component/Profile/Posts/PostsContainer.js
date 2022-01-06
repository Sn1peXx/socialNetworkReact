import {addPostActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        userPosts: state.profilePage.userPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPostActionCreator: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;