import {IClient} from "./IClient.model";

export interface IClientAddress {
    id?: number
    streetAndNumber?: string;
    city?: string;
    zipCode?: string;
    state?: string;
    lat?: string;
    lng?: string;
    clientId?: number;
    client?: IClient;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
