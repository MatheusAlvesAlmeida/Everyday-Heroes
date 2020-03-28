import React from 'react';
import './style.css';
import logo from '../../assets/alogo.svg'
import {Link} from 'react-router-dom';

export default function Donate(){
    return(
        <div className="donate">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1 align="justify">Insira as informações corretamente para que possamos encontrar os heróis que irão te ajudar.</h1>
                </section>

                <form>
                    <input placeholder="Endereço"/>
                    <textarea placeholder="Itens a doar"/>
                    <input placeholder="Horário disponível para visita"/>

                    <button className="button" type="submit">Enviar</button>
                    <Link className="backLink" to="/profile">
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}