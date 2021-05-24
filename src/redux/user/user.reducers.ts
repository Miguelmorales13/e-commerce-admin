import {UserState} from "./user.state";
import {IAction} from "../index";

export enum EnumUserRedux {
    Set = 'UsersSet',
    SetLoader = 'UsersSetLoader',
    SetList = 'UsersSetList',
    Add = 'UsersAdd',
    Update = 'UsersUpdate',
    Delete = 'UsersDelete'
}

export const UsersReducer = function (state = UserState, {type, payload}: IAction<EnumUserRedux, any>) {
    switch (type) {
        case EnumUserRedux.SetLoader:
            return {
                ...state,
                loading: payload
            }
        case EnumUserRedux.Set:
            return {
                ...state,
                selectedUser: Object.assign({}, payload ? payload : {access: []})
            }
        case EnumUserRedux.SetList:
            return {
                ...state,
                users: payload
            }
        case EnumUserRedux.Add:
            return {
                ...state,
                users: [...state.users, payload]
            }
        case EnumUserRedux.Delete:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload.id)
            }
        case EnumUserRedux.Update:
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== payload.id), payload]
            }
        default:
            return state
    }
}
