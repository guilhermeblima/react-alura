import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  }; 

  render(){
    return (
      <div className="App">
          <Tabela autores = {this.state.autores} />
      </div>
    );
  }
  
}

export default App;
