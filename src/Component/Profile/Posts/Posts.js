import {useState} from "react";

import profileStyle from '../Profile.module.css'

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
        <div className={profileStyle.posts}>
            <h2 className={profileStyle.posts_title}>Мои записи</h2>
            <form>
                <input
                    type="text"
                    value={text}
                    onChange={onTextChange}
                    placeholder="Что у вас нового?"
                    className={profileStyle.posts_input}
                />
                <button
                    type="button"
                    className={profileStyle.posts_send}
                    onClick={() => userSaveHandler()}>
                    Поделиться
                </button>
            </form>
        </div>
    )
}

export default Posts