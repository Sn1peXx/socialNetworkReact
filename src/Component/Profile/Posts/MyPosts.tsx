// @ts-ignore
import profile from '../../../resources/Q5gquT-Dlhc.jpeg'
// @ts-ignore
import profileStyle from '../Profile.module.css'
import {FC} from "react";

type UserPostsType = {
    id: number,
    userName: string,
    text: string
}

type initialState = {
    userPosts: UserPostsType[]
}

const MyPosts: FC<initialState> = ({userPosts}) => {
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