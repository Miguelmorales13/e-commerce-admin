import {createContext} from "react";
import {IDrawMenu} from "../models/IDrawMenu";
import {Person} from "@material-ui/icons";

const menu: IDrawMenu[] = [
    {
        title: '',
        items: [
            {
                icon: <Person/>,
                title: 'Home',
                path: '/admin'
            }
        ]

    }, {
        title: 'Administration',
        items: [
            {
                icon: <Person/>,
                title: 'Users',
                path: '/admin/users'
            }, {
                icon: <Person/>,
                title: 'Client',
                path: '/admin/clients'
            }
        ]
    }, {
        title: 'Storage',
        items: [
            {
                icon: <Person/>,
                title: 'Categories products',
                path: '/admin/categories-products'
            }, {
                icon: <Person/>,
                title: 'Products',
                path: '/admin/products'
            }
        ]
    }
]
export const MenuContext = createContext(menu)

