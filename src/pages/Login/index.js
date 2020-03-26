import React from 'react';
import './style.css';
import loginPage from '../../assets/loginPage.jpg'
import logo from '../../assets/alogo.svg'
import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu login"/>
                    <button className="button">Entrar</button>
                    <Link className="backLink" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={loginPage} alt="Foto bonitinha"/>
        </div>
    );
}