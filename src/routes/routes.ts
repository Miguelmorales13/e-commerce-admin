import SignInPage from "../pages/SignInPage";
import {FC} from "react";
import AdminPage from "../pages/AdminPage";
import HomeAdminPage from "../pages/admin/HomeAdminPage";
import UsersPage from "../pages/admin/UsersPage";
import ClientPage from "../pages/admin/ClientsPage";
import ProductsPage from "../pages/admin/ProductsPage";
import CategoryProductsPage from "../pages/admin/CategoryProductsPage";

export interface IRoute {
    component: FC | any
    path: string
    name: string
    requiredAuth: boolean
    exact?: boolean
    routes?: IRoute[]
}

export const ROUTES: IRoute[] = [
    {
        component: SignInPage,
        path: '/',
        name: 'login',
        requiredAuth: false,
        exact: true
    }, {
        component: SignInPage,
        path: '/forgot-password',
        name: 'forgot-password',
        requiredAuth: false,
        exact: true
    }, {
        component: AdminPage,
        path: '/admin',
        name: 'admin',
        requiredAuth: true,
        routes: [
            {
                component: HomeAdminPage,
                path: '/admin/',
                name: 'home-admin',
                exact: true,
                requiredAuth: true,
            }, {
                component: UsersPage,
                path: '/admin/users',
                name: 'users',
                exact: true,
                requiredAuth: true,
            }, {
                component: ClientPage,
                path: '/admin/clients',
                name: 'clients',
                exact: true,
                requiredAuth: true,
            }, {
                component: ProductsPage,
                path: '/admin/products',
                name: 'products',
                exact: true,
                requiredAuth: true,
            }, {
                component: CategoryProductsPage,
                path: '/admin/categories-products',
                name: 'categories-products',
                exact: true,
                requiredAuth: true,
            },
        ]
    }
]
