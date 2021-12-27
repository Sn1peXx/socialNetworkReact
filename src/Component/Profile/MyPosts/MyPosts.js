import profile from '../../../resources/Q5gquT-Dlhc.jpeg'

const MyPosts = ({text, userName}) => {
    return (
        <div className="my_post">
            <div className="post">
                <img className="post_img" src={profile} alt="avatar"/>
                <p className="post_name">{userName}</p>
                <div>
                    <p className="post_texts">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;