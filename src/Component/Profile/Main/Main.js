import './Main.css'
import profile from '../../../resources/Q5gquT-Dlhc.jpeg'
import MyPosts from "../MyPosts/MyPosts";
import PostsContainer from "../Posts/PostsContainer";

const Main = ({userPosts, dispatch}) => {

    return (
        <div className="main_content">
            <div className="my_description">
                <img src={profile} alt="avatar" width={250} className="avatar"/>
                <div className="about">
                    <h2 className="my_name">Andrey Lavrusenko</h2>
                    <div className="wrapper">
                        <div className="profile_info">
                            <p className="profile_span">Дата рождения:</p>
                            <p className="profile_span">Город: </p>
                            <p className="profile_span">Образование:</p>
                        </div>
                        <div className="profile_info">
                            <p className="my_birth profile_answer">2 Апреля</p>
                            <p className="my_city profile_answer">Санкт-Петербург</p>
                            <p className="my_education profile_answer">ИСПО СПБ</p>
                        </div>
                    </div>
                </div>
            </div>
            <PostsContainer dispatch={dispatch}/>
            <MyPosts userPosts={userPosts}/>
        </div>
    )
}

export default Main