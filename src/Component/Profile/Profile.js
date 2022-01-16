import {useState} from "react";

import MyPosts from "./Posts/MyPosts";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileChange from "./ProfileStatus/ProfileChange";

import avatar from '../../resources/customers.png'
import profileStyle from './Profile.module.css'



const Profile = ({userPosts, profile, status, updateUserStatus, isOwner, savePhoto, setProfileUserData}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return null
    }

    const mainPhotoSelected = (e) => {
       if (e.target.files.length) {
           savePhoto(e.target.files[0]);
       }
    }

   return (
        <div className={profileStyle.main_content}>
            <div className={profileStyle.my_description}>
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="avatar" width={250} className={profileStyle.avatar} />
                <div className={profileStyle.about}>
                    <div className={profileStyle.profile_flex}>
                        <h2 className={profileStyle.my_name}>{profile.fullName}</h2>
                        {isOwner
                            ? null
                            : <button className={profileStyle.profile_change} onClick={() => setEditMode(!editMode)}>⚙</button>
                        }
                    </div>
                    {editMode
                        ? <ProfileChange setProfileUserData={setProfileUserData} />
                        : <div className={profileStyle.wrapper}>
                            <div>
                                <p className={profileStyle.profile_span}>Обо мне:</p>
                                <p className={profileStyle.profile_span}>Работа: </p>
                                <p className={profileStyle.profile_span}>GitHub:</p>
                                {isOwner ?  null :
                                    <div className="input__wrapper">
                                        <input type="file" name="file" id="input__file" onChange={mainPhotoSelected} className={profileStyle.input__file} />
                                        <label htmlFor="input__file" className={profileStyle.input__file_button}>
                                            <span className={profileStyle.input__file_button_text}><span className={profileStyle.text_input}>Изменить фото</span></span>
                                        </label>
                                    </div>
                                }
                            </div>
                            <div>
                                <p className={profileStyle.profile_answer}>{profile.aboutMe}</p>
                                <p className={profileStyle.profile_answer}>{profile.lookingForAJobDescription}</p>
                                <p className={profileStyle.profile_answer}>{profile.contacts.github}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
            <PostsContainer/>
            <MyPosts userPosts={userPosts}/>
        </div>
   )
}

export default Profile