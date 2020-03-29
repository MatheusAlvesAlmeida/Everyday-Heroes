import React, {useState} from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../assets/alogo.svg';
import api from '../../Services/api';
import { response } from 'express';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name, email, contact, city, uf
        };

        try{
            const answer = await api.post('', data); //botar a rota
            alert(`Salve seu ID de acesso: ${answer.data.id}`);
            history.push('/');
        }catch(error){
            alert('Erro no cadastro, tente novamente.')
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1 align="justify">Faça o seu cadastro e ajude as pessoas a encontrarei os pontos de coleta.</h1>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Número para contato"
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
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