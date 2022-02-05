import {FC, useState} from "react";

// @ts-ignore
import MyPosts from "./Posts/MyPosts.tsx";
// @ts-ignore
import PostsContainer from "./Posts/PostsContainer.tsx";
// @ts-ignore
import ProfileStatus from "./ProfileStatus/ProfileStatus.tsx";
// @ts-ignore
import ProfileChange from "./ProfileStatus/ProfileChange.tsx";
// @ts-ignore
import avatar from '../../resources/customers.png'
// @ts-ignore
import profileStyle from './Profile.module.css'
import {PostType, ProfileType} from "../../Redux/profileReducer";



type ProfileTypes = {
    userPosts: PostType[],
    profile: ProfileType,
    status: string,
    updateUserStatus: () => void,
    isOwner: boolean,
    savePhoto: (file: string) => void,
    setProfileUserData: () => void
}

const Profile: FC<ProfileTypes> = ({userPosts, profile, status, updateUserStatus, isOwner, savePhoto, setProfileUserData}) => {

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