import React from 'react';
import './style.css';
import logo from '../../assets/alogo.svg'
import {Link} from 'react-router-dom';

export default function NewAddress(){
    return(
        <div className="new-addres">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1 align="justify">Insira as informações corretamente para que possamos encontrar os heróis que irão te ajudar.</h1>
                </section>

                <form>
                    <input placeholder="Endereço do local"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Quantidade de pessoas"/>
                    <input placeholder="Itens necessários"/>

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className="backLink" to="/profile">
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}