import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import {useSelector} from "react-redux";
import createSpacing from "@material-ui/core/styles/createSpacing";
import {IGeneralStore} from "../redux";

function ThemeProviderGeneral({children}: any) {
    // @ts-ignore
    const transform = createSpacing((factor => `${factor}rem`));
    const typeTheme = useSelector((store: IGeneralStore) => store.global.isDark) ? 'dark' : 'light'
    const theme = createMuiTheme({
        palette: {
            type: typeTheme,
            primary: {
                light: '#3d84b8',
                main: '#3d84b8',
                dark: '#344fa1',
                contrastText: '#fff',
            },
            secondary: {
                light: '#3f3697',
                main: '#3f3697',
                dark: '#3d84b8',
                contrastText: '#fff',
            },
            background: {
                default: '#f0ebcc',
                paper: '#f0ebcc',
            }
        },
        spacing: transform,
    })
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeProviderGeneral
