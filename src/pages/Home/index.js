import React, {useEffect, useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { FiGift, FiPhoneCall } from 'react-icons/fi';
import logo from '../../assets/alogo.svg'
import api from '../../Services/api';

export default function Home(){
    const admId = localStorage.getItem('admId');
    const [address, setAddress] = useState([]);
    const [donate, setDonate] = useState([]);

    useEffect(() => {
        api.get('home', {
            headers: {
                Authorization: admId,
            }
        }).then( response => {
            setAddress(response.data);
            setDonate(response.data);
        })
    }, [admId]);


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
                    {address.map(address => (
                            <li key={address.id}>
                                <strong>Ponto:</strong>
                                <p>{address.name}</p>

                                <strong>Descrição:</strong>
                                <p>{address.description}</p>

                                <strong>Qte de pessoas:</strong>
                                <p>{address.peopleQuantity}</p>

                                <strong>Itens necessários:</strong>
                                <p>{address.items}</p>

                                <button type="button"><FiGift size={16} color="#e02041"/></button>
                            </li>
                        ))}
                    </ul>
                </div> 
                <div class="right">
                    <h1>Pessoas que desejam doar:</h1>
                    <ul>
                        {donate.map(donate => (
                            <li>
                                <strong>Nome:</strong>
                                <p>{donate.address}</p>

                                <strong>Endereço:</strong>
                                <p>{donate.address}</p>

                                <strong>Itens a doar:</strong>
                                <p>{donate.items}</p>

                                <strong>Horário de visita:</strong>
                                <p>{donate.schedule}</p>

                                <button type="button"><FiPhoneCall size={16} color="#e02041"/></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}