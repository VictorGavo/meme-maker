import React from 'react';
import { Navbar, useStyles } from '../../components/Navbar'



export const Home =() => {

    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={`${classes.main_text}`}>
                    <h1>Welcome to My Meme Maker!</h1>
                    <p>A place for meme enthusiasts to keep track of their favorite memes and create new ones!</p>
                    <p>Create an account or sign in to start adding memes to your collection!</p>
                </div>
            </div>

        </>
    )
};