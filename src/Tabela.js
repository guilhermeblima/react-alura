import React, {Component} from 'react';

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Precos</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TabelaBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        )
    }); 
    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component{
    render() {
        const { autores } = this.props;
        return (
            <table>
                <TabelaHead/>
                <TabelaBody autores = { autores }/>
            </table>
        );
    }

}

export default Tabela;