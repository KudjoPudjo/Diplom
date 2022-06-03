import Auth from "../pages/Auth/Auth";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";

let routes = [
    {
        name:"auth",
        link:"auth",
        component: (<Auth />),
        protected:false,
        isAllowed:'user',
        exact:false,
        children:[
            {
                name:"login",
                link:"",
                component: (<Login />),
                protected:false,
                isAllowed:'user',
                exact:false,
            },
            {
                name:"register",
                link:"register",
                component: (<Register />),
                protected:false,
                isAllowed:'user',
                exact:false,
            }
        ]
    },
    {
        name:"news",
        link:"/",
        component: (<News />),
        protected:true,
        isAllowed:'user',
        exact:false
    },
    {
        name:"news",
        link:"/",
        component: (<News />),
        protected:true,
        isAllowed:'user',
        exact:false
    }
]

export default routes