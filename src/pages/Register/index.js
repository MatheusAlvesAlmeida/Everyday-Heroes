import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/alogo.svg'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1>Faça o seu cadastro e ajude as pessoas a encontrarei os pontos de coleta e terem noção das necessidades imediatas.</h1>
                </section>

                <form>
                    <input placeholder="Nome do local"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Número para contato"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className="backLink" to="/">
                        Já tenho cadastro
                    </Link>
                </form>
            </div>
        </div>
    );
}