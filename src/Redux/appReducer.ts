// @ts-ignore
import {getAuthUserData} from "./authReducer.ts";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}
 
const appReducer = (state = initialState, action: initializedSuccessActionType) : InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = () : initializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());

    dispatch(initializedSuccess());
}

export default appReducer;