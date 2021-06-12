import React, {FunctionComponent, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from "../components/menu/Menu";
import {Switch} from "react-router-dom";
import {IRoute} from "../routes/routes";
import SubRoute from "../routes/SubRoute";
import AdminAppBar from "../components/AdminAppBar";
import {Box, Container, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {Copyright} from "../components/Copyright";

interface OwnProps {
    routes: IRoute[]
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: '100vh',
        overflow: 'auto',
        margin: 0,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(0.5),
        height: '100%',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    footer: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const AdminPage: FunctionComponent<Props> = ({routes}) => {
    const classes = useStyles();
    const theme = useTheme()
    const isDevice = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(state => !state);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setOpen(!isDevice)
    }, [isDevice])
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AdminAppBar open={open} onClick={handleDrawerOpen}/>
            <Menu open={open} onClick={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Box p={1} height={"100%"}>
                    {/*<Paper className={classes.paper} variant="outlined">*/}
                    <Switch>
                        {
                            routes && routes.map((route, i) => (
                                <SubRoute key={i} {...route}/>
                            ))
                        }
                    </Switch>

                    {/*</Paper>*/}

                </Box>
                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">My sticky footer can be found here.</Typography>
                        <Copyright/>
                    </Container>
                </footer>
            </main>
        </div>
    );
};

export default AdminPage;


