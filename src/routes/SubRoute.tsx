import React, {FunctionComponent} from 'react';
import {Redirect, Route} from "react-router-dom";
import {IRoute} from "./routes";
import {useSelector} from "react-redux";
import {IGeneralStore} from "../redux";


interface OwnProps extends IRoute {
}

type Props = OwnProps;


const SubRoute: FunctionComponent<Props> = (route) => {
    const isAuth = useSelector((store: IGeneralStore) => store.auth.token) !== ''
    const render = <Route path={route.path} render={(props: any) => (<route.component {...props} routes={route.routes}/>)}/>
    if (!route.requiredAuth) {
        return isAuth ? <Redirect to={'/admin'}/> : render
    }
    if (!isAuth) return <Redirect to="/"/>
    return render
};

export default SubRoute;
