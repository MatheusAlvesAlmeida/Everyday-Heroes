import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/alogo.svg';
import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu login"/>
                    <button className="button">Seja um herói</button>
                    <Link className="backLink" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}