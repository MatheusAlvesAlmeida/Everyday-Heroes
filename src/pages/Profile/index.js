import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/alogo.svg'
import { FiTrash2, FiEdit3 } from 'react-icons/fi';


export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Logo"/>
                <span>Bem vindo, Usuário</span>
                <Link className="button" to="/address/new">Cadastrar ponto</Link>
                <Link className="button" to="/donate">Doação</Link>
                <Link className="button" to="/home">Página Principal</Link>
            </header>

            <h1>Pontos de coleta cadastrados por você</h1>
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

                    <button type="button"><FiTrash2 size={16} color="#e02041"/></button>
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

                    <button type="button"><FiTrash2 size={16} color="#e02041"/></button>
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

                    <button type="button"><FiTrash2 size={16} color="#e02041"/></button>
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

                    <button type="button"><FiTrash2 size={16} color="#e02041"/></button>
                </li>
            </ul>
        </div>
    );
}