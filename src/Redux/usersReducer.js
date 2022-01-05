const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        console.log(item.id)
                        return {...item, followed: false}
                    }
                    return item;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item;
                })
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

export const followAccount = (id) => ({type: FOLLOW, id: id});
export const unfollowAccount = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAction = (users) => ({type: SET_USERS, users});

export default usersReducer;