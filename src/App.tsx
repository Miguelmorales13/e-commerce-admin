import React from 'react';
import './App.css';
import {SnackbarProvider} from "notistack";
import {Provider} from "react-redux";
import {persist, store} from "./redux";
import {PersistGate} from "redux-persist/integration/react";
import {notyStackRef} from "./utils";
import {BrowserRouter, Switch} from "react-router-dom";
import {ROUTES} from "./routes/routes";
import SubRoute from "./routes/SubRoute";
import ThemeProviderGeneral from "./themes/ThemeProviderGeneral";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <SnackbarProvider maxSnack={3} ref={notyStackRef}>
                    <ThemeProviderGeneral>
                        <BrowserRouter basename={process.env.PUBLIC_URL}>
                            <Switch>
                                {ROUTES.map((route, i) => <SubRoute key={i} {...route}/>)}
                            </Switch>
                        </BrowserRouter>
                    </ThemeProviderGeneral>
                </SnackbarProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
