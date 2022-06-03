import React from "react";
import {Navigate} from "react-router-dom";


function protectedRoute ({
     redirectUrl = "/auth",
     isAllowed,
     isAuth,
     children,
     userRole
    }){
    if(!isAuth){
        return (<Navigate to={`${redirectUrl}`} replace={true}/>)
    }

    if(isAllowed !== userRole){
        return null
    }

    return children
}

export default protectedRoute

