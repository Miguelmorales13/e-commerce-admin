import {ClientState} from "./client.state";
import {IAction} from "../index";

export enum EnumClientRedux {
    Set = 'ClientsSet',
    SetLoader = 'ClientsSetLoader',
    SetList = 'ClientsSetList',
    Add = 'ClientsAdd',
    Update = 'ClientsUpdate',
    Delete = 'ClientsDelete'
}

export const ClientsReducer = function (state = ClientState, {type, payload}: IAction<EnumClientRedux, any>) {
    switch (type) {
        case EnumClientRedux.SetLoader:
            return {
                ...state,
                loading: payload
            }
        case EnumClientRedux.Set:
            return {
                ...state,
                selectedClient: Object.assign({}, payload ? payload : {access: []})
            }
        case EnumClientRedux.SetList:
            return {
                ...state,
                clients: payload
            }
        case EnumClientRedux.Add:
            return {
                ...state,
                clients: [...state.clients, payload]
            }
        case EnumClientRedux.Delete:
            return {
                ...state,
                clients: state.clients.filter((client) => client.id !== payload.id)
            }
        case EnumClientRedux.Update:
            return {
                ...state,
                clients: [...state.clients.filter(client => client.id !== payload.id), payload]
            }
        default:
            return state
    }
}
