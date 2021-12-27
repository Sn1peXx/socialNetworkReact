const Posts = () => {
    return (
        <div className="posts">
            <h2 className="posts_title">Мои записи</h2>
            <input type="text" placeholder="Что у вас нового?" className="posts_input"/>
            <button className="posts_send" type={"submit"}>Поделиться</button>
        </div>
    )
}

export default Posts