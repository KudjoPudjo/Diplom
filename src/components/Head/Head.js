import React from 'react'
import classes from "./Head.module.scss";
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function Head(){
    const user = useSelector(state => state.auth.name)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.head_bar}>
            <div className={classes.head_wrp}>
                <NavLink to={'/'}>
                    <div className={classes.logo}></div>
                </NavLink>
                <div className={classes.avatar_wrp}>
                    {user
                    ?(<p className={classes.user_name}>{user}</p>)
                    :''}
                    <Avatar
                        alt=""
                        src=""
                        sx={{ width: 50, height: 50 }}
                        onClick={handleClick}
                        style={{cursor:"pointer"}}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <NavLink className={classes.link} to={"/account"}>
                            <MenuItem onClick={handleClose}>Профиль</MenuItem>
                        </NavLink>
                        <MenuItem onClick={handleClose}>Выйти</MenuItem>
                    </Menu>
                </div>

            </div>
        </div>
    )
}

export default Head