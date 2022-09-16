
import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/modalPostagem';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokens-reducer';
import { toast } from 'react-toastify';

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );

  useEffect(() => {
      if (token == "") {
          toast.info('Você precisa estar logado.', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          navigate("/login")

      }
  }, [token])

  return (
    <>
      
      <Grid
        className="caixa"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#292929" }}
      >
        <Grid  alignItems="center" item xs={6}>
          <Box  paddingX={20}>
            <Typography
              variant="h2"
              gutterBottom
              color="textPrimary"
              component="h2"
              align="center"
              className="titulo"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h4"
              align="center"
              className="titulo"
              style={{ color: "black", fontWeight: "bold" }}
            >
              <br />
              <br />
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao2">
              Ver Postagens
            </Button>
            <Button variant="outlined" className="botao">
              Nova Postagem
            </Button>
          </Box>
        </Grid>
        <Grid className="imagem3"  item xs={6}></Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;