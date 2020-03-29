import React, {useState} from 'react';
import './style.css';
import logo from '../../assets/alogo.svg'
import api from '../../Services/api';
import {Link, useHistory} from 'react-router-dom';

export default function NewAddress(){
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [peopleQuantity, setPeopleQuantity] = useState('');
    const [items, setItems] = useState('');

    const history = useHistory();

    async function handleNewAddress(e){
        e.preventDefault();
        const data = {
            address, description, peopleQuantity, items,
        };

        try{
            await api.post('', data);
            alert('Ponto cadastrado com sucesso!');
            history.push('/profile');
        }catch(error){
            alert('Erro no cadastro, tente novamente.')
        }

    }

    return(
        <div className="new-addres">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1 align="justify">Insira as informações corretamente para que possamos encontrar os heróis que irão te ajudar.</h1>
                </section>

                <form onSubmit={handleNewAddress}>
                    <input placeholder="Endereço do local"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Quantidade de pessoas"
                        value={peopleQuantity}
                        onChange={e => setPeopleQuantity(e.target.value)}
                    />
                    <input placeholder="Itens necessários"
                        value={items}
                        onChange={e => setItems(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className="backLink" to="/profile">
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}