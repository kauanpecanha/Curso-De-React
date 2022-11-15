import React from 'react';
import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro.jsx'
import ComParametro from './components/basics/ComParametro.jsx'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/Repetição/ListaAlunos';
import ListaProdutos from './components/Repetição/ListaProdutos';
import ParOuImpar from '../src/components/Condicional/ParOuImpar'
import UsuarioInfo from '../src/components/Condicional/UsuarioInfo'

export default (_)=>(
        <div id = "app">
            <h1>Fundamentos de React</h1>

            <div className="cards">
                
                <Card titulo = "Condicional - Aula 2" color = "#900C3F">
                    <UsuarioInfo usuario = {{nome : 'Fernando'}}></UsuarioInfo>
                    <h3>Checar o problema que está acontecendo com este card, depois!</h3>
                </Card>
                
                <Card titulo = "Condicional - Aula 1" color = "#900C3F">
                    <ParOuImpar number = {21}></ParOuImpar>
                </Card>

                <Card titulo = "Exercício de Repetição" color = "darkmagenta">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo = "Repetição" color = "#ff4c65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo = "Componente com filhos #1" color = "orange">
                    <Familia sobrenome = "Peçanha">
                        <FamiliaMembro nome = "Kauan"></FamiliaMembro>
                        <FamiliaMembro nome = "Cláudia"></FamiliaMembro>
                        <FamiliaMembro nome = "Isabella"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo = "Desafio Aleatório" color = "#080">
                    <Aleatorio numero1 = {1} numero2 = {10}/>
                </Card>

                <Card titulo = "Fragmento" color = "#6495ED">
                    <Fragmento nome = 'Pedro Silva' nota = {9.3}/>
                </Card>

                <Card titulo = "Componentes com parâmetros" color = "#FF7F50">
                    <ComParametro nome = "Pedro Silva" nota = {9.3}/>
                </Card>

                <Card titulo = "Primeiro Card" color = "rgb(255, 87, 51)">
                    <Primeiro/>
                </Card>
            </div>
        </div>
    )