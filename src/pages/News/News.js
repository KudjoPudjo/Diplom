import React from 'react'
import classes from "./News.module.scss";
import Button from "@mui/material/Button";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function News (){
    return (
        <div className={classes.news_bar}>
            <h1 className={classes.news_title}>Посты:</h1>
            <Button className={classes.news_add_button} variant="outlined" startIcon={<AddCircleSharpIcon />}>
                Добавить новый пост
            </Button>
        </div>
    )
}


export default News