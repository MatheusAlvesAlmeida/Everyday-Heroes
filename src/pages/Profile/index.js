import React, {useEffect, useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/alogo.svg'
import { FiTrash2 } from 'react-icons/fi';
import api from '../../Services/api';
import { response } from 'express';

export default function Profile(){
    const admName = localStorage.getItem('admName');
    const admId = localStorage.getItem('admId');
    const [address, setAddress] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: admId,
            }
        }).then( response => {
            setAddress(response.data);
        })
    }, [admId]);

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Logo"/>
                <span>Bem vindo, {admName}</span>
                <Link className="button" to="/address/new">Cadastrar ponto</Link>
                <Link className="button" to="/donate">Doação</Link>
                <Link className="button" to="/home">Página Principal</Link>
            </header>

            <h1>Pontos de coleta cadastrados por você</h1>
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

                        <button type="button"><FiTrash2 size={16} color="#e02041"/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}