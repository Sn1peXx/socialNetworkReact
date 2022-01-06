import profile from '../../../resources/Q5gquT-Dlhc.jpeg'

const MyPosts = (props) => {

    const content = props.userPosts.map(item => {
        return (
            <div className="my_post" key={item.id}>
                <div className="post">
                    <img className="post_img" src={profile} alt="avatar"/>
                    <p className="post_name">{item.userName}</p>
                    <div>
                        <p className="post_texts">{item.text}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {content}
        </>
    )
}

export default MyPosts;