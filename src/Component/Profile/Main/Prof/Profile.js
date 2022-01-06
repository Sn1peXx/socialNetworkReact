import MyPosts from "../../MyPosts/MyPosts";
import PostsContainer from "../../Posts/PostsContainer";

import avatar from '../../../../resources/customers.png'

import './Profile.css'
import Preloader from "../../../Common/Preloader/Preloader";


const Profile = ({userPosts, dispatch, profile}) => {

    if (!profile) {
        return <Preloader />
    }


    return (
        <div className="main_content">
            <div className="my_description">
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="avatar" width={250} className="avatar"/>
                <div className="about">
                    <h2 className="my_name">{profile.fullName}</h2>
                    <div className="wrapper">
                        <div className="profile_info">
                            <p className="profile_span">Обо мне:</p>
                            <p className="profile_span">Работаю:</p>
                            <p className="profile_span">Работа: </p><br/><br/>
                            <p className="profile_span">Контакты:</p>
                            <p className="profile_span">GitHub:</p>
                        </div>
                        <div className="profile_info">
                            <p className="my_birth profile_answer">{profile.aboutMe}</p>
                            <p className="my_education profile_answer">{profile.lookingForAJob ? "Нет" : "Да"}</p>
                            <p className="my_city profile_answer">{profile.lookingForAJobDescription}</p><br/>
                            <p className="my_education profile_answer">{profile.contacts.vk}</p>
                            <p className="my_education profile_answer">{profile.contacts.github}</p>
                        </div>
                    </div>
                </div>
            </div>
            <PostsContainer dispatch={dispatch}/>
            <MyPosts userPosts={userPosts}/>
        </div>
    )
}

export default Profile