import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {AuthReducer, IAuthState} from "./auth";
import {GlobalReducer, IGlobalState} from "./global";
import {IUsersState, UsersReducer} from "./user";
import {ClientsReducer, IClientsState} from "./client";
import {IProductsState, ProductsReducer} from "./product";
import {CategoryProductsReducer, ICategoryProductsState} from "./category-product";


export interface IGeneralStore {
    auth: IAuthState
    global: IGlobalState,
    user: IUsersState
    client: IClientsState
    product: IProductsState
    categoryProduct: ICategoryProductsState
}

export interface IAction<T, D> {
    type: T
    payload: D
}

export const rootReducer = combineReducers({
    auth: persistReducer({key: 'auth', storage}, AuthReducer),
    global: persistReducer({key: 'global', storage}, GlobalReducer),
    user: UsersReducer,
    client: ClientsReducer,
    product: ProductsReducer,
    categoryProduct: CategoryProductsReducer,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// @ts-ignore
const persist = persistStore(store)
export {
    store,
    persist
}
