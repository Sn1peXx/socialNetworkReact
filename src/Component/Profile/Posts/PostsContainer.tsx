// @ts-ignore
import {addPostActionCreator} from "../../../Redux/profileReducer.ts";
// @ts-ignore
import Posts from "./Posts.tsx";
import {connect} from "react-redux";
import {getUsersPosts} from "../../../Redux/Selectors/profileSelector";


const mapStateToProps = state => {
    return {
        userPosts: getUsersPosts(state)
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