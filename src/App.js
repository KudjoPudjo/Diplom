import React from "react";

import classes from "./App.module.css"
import ListRoute from "./route/listRoute";
import Head from "./components/Head/Head";


function App (){
    return (
        <div className={classes.general_wrp}>
            <Head />
            <div className={classes.pages_wrp}>
                <ListRoute />
            </div>

        </div>
    )
}

export default App