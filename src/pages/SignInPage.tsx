import React, {FunctionComponent} from 'react';
import {IRoute} from "../routes/routes";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Avatar, Box, Card, CssBaseline, Grid, Link, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Copyright} from "../components/Copyright";
import FormFlex from "../components/forms/FormFlex";
import {ISignIn} from "../models/ISignIn";
import {useDispatch} from "react-redux";
import {AuthActionSignIn} from "../redux/auth";
import {inputsSignIn} from "../data-modeler";
import {NavLink} from "react-router-dom";
import {object} from "yup";
import {ValidationsForm} from "../utils";


const useStyles = makeStyles((theme) => ({
    root: {},
    main: {
        background: `linear-gradient(to left top,  ${theme.palette.primary.main}, ${theme.palette.background.default});`

    },
    flex: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    paper: {
        minHeight: '100vh',
    },
    cardLeft: {
        background: theme.palette.primary.main,
        padding: theme.spacing(1),
        color: theme.palette.primary.contrastText
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: theme.spacing(3)
    }
}));

interface OwnProps {
    routes: IRoute
}

type Props = OwnProps;

const schema = object().shape({
    user: ValidationsForm.reqWithSizeMinMax(3, 50),
    password: ValidationsForm.reqWithSizeMinMax(3, 30)
})
const SignInPage: FunctionComponent<Props> = ({routes}) => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down("sm"))
    const dispatch = useDispatch()
    const initialValues: ISignIn = {
        user: '',
        password: ''
    }
    const handleSubmit = (values: ISignIn) => {
        dispatch(AuthActionSignIn(values))
    }
    const classes = useStyles();
    return (
        <Box component="main" className={classes.main}>
            <CssBaseline/>
            <div className={`${classes.flex} ${classes.paper}`}>
                <Card elevation={10}>
                    <Grid container>
                        {!isSm && <Grid item xs={6} className={`${classes.flex} ${classes.cardLeft}`}>
                            <img src="e-commerce.png" alt="icon"/>
                            <Typography variant="h4">
                                e-commerse
                            </Typography>
                            <Typography variant="h5">🤑💲 </Typography>
                        </Grid>}
                        <Grid item xs={12} md={6}>
                            <div className={`${classes.flex}`}>
                                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                                <Typography component="h1" variant="h5">Sign in</Typography>
                            </div>
                            <div className={classes.form}>
                                <FormFlex inputs={inputsSignIn} handleSubmit={handleSubmit} initialValues={initialValues} schema={schema}/>
                                <Grid container>
                                    <Grid item xs>
                                        <Link component={NavLink} to="/forgot-password" variant="body2">Did you forget your password ?</Link>
                                    </Grid>
                                    <Grid item>
                                        <Link component={NavLink} to="/sign-up" variant="body2">You dont have account ?</Link>
                                    </Grid>
                                    <Grid item className={classes.footer}>
                                        <Copyright/>
                                    </Grid>
                                </Grid>
                            </div>

                        </Grid>
                    </Grid>

                </Card>
            </div>
        </Box>
    );
};

export default SignInPage;



