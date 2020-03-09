import { IUserState } from '../state/user.state';
import { UserActions, EUserAction } from '../actions/user.actions';

export const userReducers = (state: IUserState, action: UserActions): IUserState => {
    switch (action.type) {
        case EUserAction.GetUsersSuccess:
            return {
                ...state,
                users: action.payload
            };
        case EUserAction.GetUserSuccess:
            return {
                ...state,
                selectedUser: action.payload
            };
        default:
            return state;
    }
};