import React from "react";
import routes from "./Route";
import {useSelector} from "react-redux";
import ProtectedRoute from "./privateRoute/protectedRoute";
import {Route, Routes} from "react-router-dom";


function ListRoute (){
    const isAuth = useSelector(state => state.auth.userId)
    const userRole = useSelector(state => state.auth.userRole)

    return (
            <Routes>
                {routes.map((elem, id) => {
                    if (elem.protected) {
                        return (
                            <Route path={elem.link} element={
                                <ProtectedRoute isAuth={isAuth}  isAllowed={elem.isAllowed} userRole={userRole}>
                                    {elem.component}
                                </ProtectedRoute>
                            } key={id}/>
                        )
                    }
                    return (
                        <Route path={elem.link} element={elem.component} key={id} >
                            {elem.children?elem.children.map((element,j)=>(
                                <Route path={element.link} element={element.component} key={j+id}/>
                            )):''}
                        </Route>
                    )
                })}
            </Routes>
    )
}

export default ListRoute