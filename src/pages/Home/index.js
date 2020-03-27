import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { FiGift, FiPhoneCall } from 'react-icons/fi';
import logo from '../../assets/alogo.svg'

export default function Home(){
    return(
        <div class="content">      
            <header>
                <img src={logo} alt="Logo"/>
                <span>Bem vindo, Usuário</span>
                <Link className="button" to="/profile">Ir para a página de perfil</Link>
            </header>      
            <div className="home-container">
                <div class="left">
                    <h1>Pontos de coleta:</h1>
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

                            <button type="button"><FiGift size={16} color="#e02041"/></button>
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

                            <button type="button"><FiGift size={16} color="#e02041"/></button>
                        </li>
                    </ul>
                </div> 
                <div class="right">
                    <h1>Pessoas que desejam doar:</h1>
                    <ul>
                        <li>
                            <strong>Nome:</strong>
                            <p>Nome da pessoa</p>

                            <strong>Endereço:</strong>
                            <p>edasdsa</p>

                            <strong>Itens a doar:</strong>
                            <p>asdsad</p>

                            <strong>Horário de visita:</strong>
                            <p>asdsasdasdad</p>

                            <button type="button"><FiPhoneCall size={16} color="#e02041"/></button>
                        </li>
                        <li>
                            <strong>Nome:</strong>
                            <p>Nome da pessoa</p>

                            <strong>Endereço:</strong>
                            <p>edasdsa</p>

                            <strong>Itens a doar:</strong>
                            <p>asdsad</p>

                            <strong>Horário de visita:</strong>
                            <p>asdsasdasdad</p>

                            <button type="button"><FiPhoneCall size={16} color="#e02041"/></button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}