// Делаем mapToProps более гибким

export const getUsersPage = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowing = (state) => {
    return state.usersPage.followingInProgress;
}