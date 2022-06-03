import React, {useMemo} from "react";
import classes from "./Register.module.scss";
import {Navigate, NavLink} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {object, string,ref} from "yup";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/actionsCreatore/auth";


function Register(){
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.auth.userId)

    /** Валидация полей **/
    const validationSchema = useMemo(
        () =>
            object().shape({
                login: string().required(),
                password: string().required(),
                confirmPassword:string().oneOf([ref('password'), null], 'Passwords must match')
            }),
        []
    );
    /** Начальные значения для формы **/
    const initialValues = {
        login:'',
        password:'',
        confirmPassword:''
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
            dispatch(registerUser(values))
        },
    });




    return (
        <div className={classes.register_wrp}>
            <NavLink className={classes.register_link} to={'/auth'}>Войти</NavLink>
            <h1 className={classes.register_title}>Регистрация</h1>
            <div className={classes.login_form}>
                <TextField className={classes.login_field} error={Boolean(errors.login)} value={values.login} onChange={handleChange} name="login" fullWidth label="Логин" id="login" />
                <TextField className={classes.login_field} error={Boolean(errors.password)} value={values.password} onChange={handleChange} fullWidth name="password" label="Пароль" id="password" />
                <TextField className={classes.login_field} error={Boolean(errors.confirmPassword)} value={values.confirmPassword} onChange={handleChange} fullWidth name="confirmPassword" label="Повторите пароль" id="confirmPassword" />
                <div className={classes.login_button}>
                    <Button variant="contained" onClick={()=>handleSubmit()} >Зарегистрироваться</Button>
                </div>
            </div>
            {userInfo && (<Navigate to={'/'} />)}
        </div>
    )
}

export default Register