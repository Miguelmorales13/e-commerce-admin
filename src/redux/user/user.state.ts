import {IUser} from "../../models/IUser.model";

export interface IUsersState {
    selectedUser: IUser
    users: IUser[]
    loading: boolean
}

export const UserState: IUsersState = {
    selectedUser: {},
    users: [],
    loading: false
}

