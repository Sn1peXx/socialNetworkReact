import MyPosts from "./Posts/MyPosts";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

import avatar from '../../resources/customers.png'
import profileStyle from './Profile.module.css'


const Profile = ({userPosts, profile, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader />
    }

   return (
        <div className={profileStyle.main_content}>
            <div className={profileStyle.my_description}>
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="avatar" width={250} className={profileStyle.avatar} />
                <div className={profileStyle.about}>
                    <h2 className={profileStyle.my_name}>{profile.fullName}</h2>
                    <div className={profileStyle.wrapper}>
                        <div>
                            <p className={profileStyle.profile_span}>Обо мне:</p>
                            <p className={profileStyle.profile_span}>Работаю:</p>
                            <p className={profileStyle.profile_span}>Работа: </p>
                            <p className={profileStyle.profile_span}>Контакты:</p>
                            <p className={profileStyle.profile_span}>GitHub:</p>
                        </div>
                        <div>
                            <p className={profileStyle.profile_answer}>{profile.aboutMe}</p>
                            <p className={profileStyle.profile_answer}>{profile.lookingForAJob ? "Нет" : "Да"}</p>
                            <p className={profileStyle.profile_answer}>{profile.lookingForAJobDescription}</p>
                            <p className={profileStyle.profile_answer}>{profile.contacts.vk}</p>
                            <p className={profileStyle.profile_answer}>{profile.contacts.github}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
            <PostsContainer/>
            <MyPosts userPosts={userPosts}/>
        </div>
    )
}

export default Profile