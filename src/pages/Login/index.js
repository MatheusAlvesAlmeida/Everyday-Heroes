import React, {useState} from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/alogo.svg';
import {Link,useHistory} from 'react-router-dom';
import api from '../../Services/api';

export default function Login(){
    const [id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('', {id}); //botar a rota

            localStorage.setItem('admId', id);
            localStorage.setItem('admName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente')
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu login"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button">Seja um herói</button>
                    <Link className="backLink" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}