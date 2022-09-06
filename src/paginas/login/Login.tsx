import React from 'react';

import { Grid, Box, TextField, Typography, Button, } from '@mui/material';

import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    return (
        <>
            <Grid container>
                
                    <Box className="container">

                        <Box className="box">

                            <Box className="signin">

                                <Box className="signin-container">

                                    <Typography className="title" variant="h3"> Bem vindo ao Hospício!</Typography>

                                    <Box className="input-container">
                                        <TextField
                                            className="input"
                                            label="Usuario"
                                            variant="filled"
                                        />

                                        <TextField
                                            className="input"
                                            id="filled-password-input"
                                            label="Senha"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="filled"
                                        />
                                    </Box>

                                    <Box className="links-container">
                                        <Link to='' className="links">I forgot my password</Link>
                                        <Link to='/register' className="links">I don't have an account</Link>
                                    </Box>

                                    <Link className="btn" to='/home'>
                                        <Button className="button">LOGIN</Button>
                                    </Link>

                                </Box>

                            </Box>

                            <Box className="box-image">

                                <img className="img" src="https://cdn.discordapp.com/attachments/1015317684780544031/1015323045151383683/em-campanha-corinthians-colocou-escudo-em-preto-e-branco-e-simulou-fogo-no-mapa-do-brasil-1566494763731_v2_4x3-removebg-preview_2.png" alt="login-image" />

                            </Box>

                        </Box>

                    </Box>
                
            </Grid>
        </>
    )
}
export default Login;