import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EnumUserRedux, UserActions} from "../../redux/user";
import {Box, Card, Grid, IconButton, Typography} from "@material-ui/core";
import FormUser from "../../components/admin/users/FormUser";
import DeleteUser from "../../components/admin/users/DeleteUser";
import {Add, Create, Delete} from "@material-ui/icons";
import {IGeneralStore} from "../../redux";
import TableResponsive from "../../components/tables/TableResponsive";
import {IButtonTable} from "../../models/IButtonTable";
import {filtersUser, headersUser} from "../../data-modeler";
import {HeaderItem} from "../../components/Item";
import {makeStyles} from "@material-ui/core/styles";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    }
}))

const UsersPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const loading = useSelector((store: IGeneralStore) => store.user.loading)
    const users = useSelector((store: IGeneralStore) => store.user.users)
    const onEdit = (row: any) => {
        dispatch({type: EnumUserRedux.Set, payload: row})
        setOpenForm(true)
    }
    const onDelete = (row: any) => {
        dispatch({type: EnumUserRedux.Set, payload: row})
        setOpenDelete(true)
    }

    const buttons: IButtonTable[] = [
        {
            component: IconButton,
            props: {disabled: loading, size: "small", color: "primary", children: <Delete/>},
            handler: onDelete
        }, {
            component: IconButton,
            props: {disabled: loading, size: "small", color: "secondary", children: <Create/>},
            handler: onEdit
        },]
    // @ts-ignore
    const headersItem: HeaderItem[] = [{key: 'name', headerName: '', title: 'tables.users.name'}]
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(UserActions.getAll())
    }, [dispatch])
    return (
        <>
            <DeleteUser open={openDelete} setOpen={setOpenDelete} headers={headersItem}/>
            <FormUser open={openForm} setOpen={setOpenForm}/>
            <Card className={classes.header} elevation={0}>
                <Typography variant="h6">Users</Typography>

                <IconButton disabled={loading} size="small" onClick={() => setOpenForm(true)} color="inherit">
                    <Add/>
                </IconButton>


            </Card>
            <Grid component={Box} overflow="auto" container>
                <Grid item sm={12}>
                    <TableResponsive headers={headersUser(buttons)} loading={loading} rows={users}
                                     filters={filtersUser}/>
                </Grid>
            </Grid>
        </>
    )
        ;
};

export default UsersPage;
