import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/alogo.svg'


export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Logo"/>
                <span>Bem vindo, Usuário</span>
                <Link className="button" to="/address/new">Cadastrar novo ponto</Link>
            </header>

            <h1>Pontos cadastrados</h1>
            <ul>
                <li>
                    <strong>Ponto:</strong>
                    <p>Nome do ponto</p>

                    <strong>Descrição:</strong>
                    <p>descrição</p>

                    <strong>Qte de pessoas:</strong>
                    <p>asdsad</p>

                    <strong>Itens necessários:</strong>
                    <p>asdas</p>

                    <button type="button">Deletar</button>
                </li>
                <li>
                    <strong>Ponto:</strong>
                    <p>Nome do ponto</p>

                    <strong>Descrição:</strong>
                    <p>descrição</p>

                    <strong>Qte de pessoas:</strong>
                    <p>asdsad</p>

                    <strong>Itens necessários:</strong>
                    <p>asdas</p>

                    <button type="button">Deletar</button>
                </li>
                <li>
                    <strong>Ponto:</strong>
                    <p>Nome do ponto</p>

                    <strong>Descrição:</strong>
                    <p>descrição</p>

                    <strong>Qte de pessoas:</strong>
                    <p>asdsad</p>

                    <strong>Itens necessários:</strong>
                    <p>asdas</p>

                    <button type="button">Deletar</button>
                </li>
                <li>
                    <strong>Ponto:</strong>
                    <p>Nome do ponto</p>

                    <strong>Descrição:</strong>
                    <p>descrição</p>

                    <strong>Qte de pessoas:</strong>
                    <p>asdsad</p>

                    <strong>Itens necessários:</strong>
                    <p>asdas</p>

                    <button type="button">Deletar</button>
                </li>
            </ul>
        </div>
    );
}