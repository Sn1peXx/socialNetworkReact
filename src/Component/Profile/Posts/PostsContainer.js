import {addPostActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = ({dispatch}) => {

    const onPostAdd = (text) => {
        let action = addPostActionCreator(text);
        dispatch(action);
    }

    return (
        <Posts addPostActionCreator={onPostAdd}/>
    )
}

export default PostsContainer;