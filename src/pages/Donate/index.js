import React, {useState} from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../assets/alogo.svg';
import api from '../../Services/api';

export default function Donate(){
    const [address, setAddress] = useState('');
    const [items, setItems] = useState('');
    const [schedule, setSchedule] = useState('');

    const history = useHistory();

    async function handleDonate(e){
        e.preventDefault();
        const data = {
            address, items, schedule,
        };

        try{
            await api.post('', data); //botar a rota
            alert('Doação cadastrada com sucesso!');
            history.push('/home');
        }catch(error){
            alert('Erro no cadastro, tente novamente.')
        }

    }

    return(
        <div className="donate">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1 align="justify">Insira as informações corretamente para que possamos encontrar os heróis que irão te ajudar.</h1>
                </section>

                <form onSubmit={handleDonate}>
                    <input placeholder="Endereço"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <textarea placeholder="Itens a doar"
                        value={items}
                        onChange={e => setItems(e.target.value)}
                    />
                    <input placeholder="Horário disponível para visita"
                        value={schedule}
                        onChange={e => setSchedule(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>
                    <Link className="backLink" to="/profile">
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}