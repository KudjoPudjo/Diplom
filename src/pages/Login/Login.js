import React,{useMemo} from "react";
import classes from "./Login.module.scss";
import {NavLink, Navigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useFormik} from "formik";
import {object,string} from "yup";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/actionsCreatore/auth";


function Login (){
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.auth.userId)

    /** Валидация полей **/
    const validationSchema = useMemo(
        () =>
            object().shape({
                login: string().required(),
                password: string().required(),
            }),
        []
    );
    /** Начальные значения для формы **/
    const initialValues = {
        login:'',
        password:''
    }

    /** Формик с ошибками и значениями **/
    const {
        values,
        handleChange,
        handleSubmit,
        errors,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
        },
    });
    
    return (
        <div className={classes.login_wrp}>
            <NavLink className={classes.login_link} to={'register'}>Создать аккаунт</NavLink>
            <h1 className={classes.login_title}>Вход</h1>
            <div className={classes.login_form}>
                <TextField className={classes.login_field} error={Boolean(errors.login)} value={values.login} onChange={handleChange} name="login" fullWidth label="Логин" id="login" />
                <TextField className={classes.login_field} error={Boolean(errors.password)} value={values.password} onChange={handleChange} fullWidth name="password" label="Пароль" id="login" />
                <div className={classes.login_button}>
                    <FormControlLabel control={<Checkbox />} label="Запомнить меня" />
                    <Button variant="contained" onClick={()=>handleSubmit()} >Войти</Button>
                </div>
            </div>
            {userInfo && (<Navigate to={'/'} />)}
        </div>
    )
}

export default Login