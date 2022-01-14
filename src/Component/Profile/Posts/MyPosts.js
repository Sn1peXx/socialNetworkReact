import profile from '../../../resources/Q5gquT-Dlhc.jpeg'
import profileStyle from '../Profile.module.css'

const MyPosts = ({userPosts}) => {
    const content = [...userPosts].reverse().map(item => {
        return (
            <div className={profileStyle.my_post} key={item.id}>
                <div className={profileStyle.post}>
                    <img className={profileStyle.post_img} src={profile} alt="avatar"/>
                    <p className={profileStyle.post_name}>{item.userName}</p>
                    <div>
                        <p className={profileStyle.post_texts}>{item.text}</p>
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