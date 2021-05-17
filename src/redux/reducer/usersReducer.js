const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let state = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2
}

const usersReducer = (usersState = state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                //users: [...state.users],
                users: usersState.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                        //Согласно принципу immutable functions,
                        //мы не имеем права изменять объект внутри чистой функции. 
                        //Поэтому нам нужно создать его копию и вернуть именно её
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...usersState,
                //users: [...state.users],
                users: usersState.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                        //Согласно принципу immutable functions,
                        //мы не имеем права изменять объект внутри чистой функции. 
                        //Поэтому нам нужно создать его копию и вернуть именно её
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...usersState, users: [...action.users]};
      
        case SET_CURRENT_PAGE:
            return {...usersState, currentPage: action.currentPage};
        
        case SET_TOTAL_USERS_COUNT:
            return{...usersState, totalUsersCount: action.totalUsersCount};
            
        default:
            return usersState;
    }  
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPageAC = (pageNum) => ({type: SET_CURRENT_PAGE, currentPage: pageNum});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});

export default usersReducer;