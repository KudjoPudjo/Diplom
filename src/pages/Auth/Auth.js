import React from "react";
import classes from "./Auth.module.scss";
import {Outlet} from "react-router-dom"

function Auth (){
    return (
        <div className={classes.auth_wrp}>
            <Outlet />
        </div>
    )
}

export default Auth