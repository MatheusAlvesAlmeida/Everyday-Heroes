import React from 'react';
import './style.css';
import logo from '../../assets/alogo.svg'

export default function Home(){
    return(
        <div class="home-container">
            <div class="header">
                <h2>Header</h2>
            </div>
            
            <div class="left">
                <h1>Pontos de coleta</h1>
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

                        <button type="button">Entrar em contato</button>
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

                        <button type="button">Entrar em contato</button>
                    </li>
                </ul>
            </div> 
            <div class="right">
                <h1>Pessoas que desejam doar</h1>
                <ul>
                    <li>
                        <strong>Nome:</strong>
                        <p>Nome da pessoa</p>

                        <strong>Endereço:</strong>
                        <p>edasdsa</p>

                        <strong>Itens a doar:</strong>
                        <p>asdsad</p>

                        <button type="button">Entrar em contato</button>
                    </li>
                    <li>
                        <strong>Nome:</strong>
                        <p>Nome da pessoa</p>

                        <strong>Endereço:</strong>
                        <p>edasdsa</p>

                        <strong>Itens a doar:</strong>
                        <p>asdsad</p>

                        <button type="button">Entrar em contato</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}