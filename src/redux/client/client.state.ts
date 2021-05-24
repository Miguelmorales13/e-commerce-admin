import {IClient} from "../../models/IClient.model";

export interface IClientsState {
    selectedClient: IClient
    clients: IClient[]
    loading: boolean
}

export const ClientState: IClientsState = {
    selectedClient: {},
    clients: [],
    loading: false
}

