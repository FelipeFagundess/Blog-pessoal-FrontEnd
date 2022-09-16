import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/statics/navbar/Navbar';
import Footer from "./components/statics/footer/Footer";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPostagem/cadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/deletarPostagem';
import DeletarTema from './components/temas/deletarTema/deletarTema';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={store}>

      <ToastContainer />

      <Router>

        <Navbar />

        <Routes>

          <Route path='/' element={<Login />}></Route>

          <Route path='/login' element={<Login />}></Route>

          <Route path='/register' element={<Login />}></Route>

          <Route path='/home' element={<Home />}></Route>

          <Route path='/temas' element={<ListaTema />}></Route>

          <Route path='/postagens' element={<ListaPostagem />}></Route>

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>

        <Footer />

      </Router>
    </Provider>
  );
}

export default App;