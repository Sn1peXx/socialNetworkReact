import {useState} from "react";

const Posts = (props) => {

    const [text, setText] = useState('');

    const onTextChange = (event) => {
        setText(event.target.value)
    }

    const userSaveHandler = () => {
        props.addPostActionCreator(text);
        setText('');
    }

    return (
        <div className="posts">
            <h2 className="posts_title">Мои записи</h2>
            <form>
                <input type="text" placeholder="Что у вас нового?" onChange={onTextChange} value={text} className="posts_input"/>
                <button className="posts_send" type="button" onClick={() => userSaveHandler()}>Поделиться</button>
            </form>
        </div>
    )
}

export default Posts