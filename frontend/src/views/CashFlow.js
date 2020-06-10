import React, { Component } from 'react';
import axios from 'axios'
import '../CSS/Cash.css';
import Header from '../components/Header'
import relatorio from '../icons/relatorio.png'
import incluir from '../icons/incluir.png'
import { Link } from 'react-router-dom';
import icon from '../icons/cash.png'
const props = {icon, route: '/home'}

const baseUrl = 'http://localhost:80/expense'
const initialState = {
    cash: {
        id: null,
        date: '',
        description: '',
        status: '',
        value: null
    },
    list: []
}


export default class CashFlow extends Component {

    state = { ...initialState }

    // UNSAFE_componentWillMount() {
    //     axios(baseUrl).then(resp => {
    //         this.setState({ list: resp.data })
    //     })
    // }
    render() {
        return (
            <>
            <Header {...props}/>
            <div className="Fluxo">
            <span> Fluxo de Caixa</span>

                <div className="data">

                    <span>de:</span>  <input type='date' />
                </div>
                <div className="data">
                    <span> até: </span> <input type='date' />

                </div>

                <div className="filtro">
                   <Link to ="/despesa"><img className="icon" src={incluir} alt="icone incluir" /></Link>

                    <button type="submit"> Filtrar </button>
                    <img className="icon" src={relatorio} alt="icone incluir" />
                </div>

        <label className="receita"> Receita: {this.total}</label>
            </div>
            </>
        )
    }
}