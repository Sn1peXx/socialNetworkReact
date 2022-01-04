const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 1, follow: false, userName: "Максим Торопов", status: 'Школа № 9', location: {country: 'Россия', city: 'Санкт-Петербург'}},
        {id: 2, follow: true, userName: "Сергей Перфильев", status: 'СПбГЭУ', location: {country: 'Россия', city: 'Москва'}},
        {id: 3, follow: false, userName: "Даниил Капалыгин", status: 'Технический колледж управления и коммерции (СПб ТКУиК, бывш. ЛРАСТ)', location: {country: 'Россия', city: 'Екатеринбург'}},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        console.log(item.id)
                        return {...item, follow: false}
                    }
                    return item;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, follow: true}
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