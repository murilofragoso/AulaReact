import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(function(cadastro) {
            let data = new Date(cadastro.data);
            let dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
            return(
                <tr key={cadastro._id}>
                    <td>
                        {cadastro.nome}
                    </td>
                    <td>
                        {dataFormatada}
                    </td>
                    <td>
                        <IconButton 
                            style='danger' 
                            icon='trash-o'
                            onClick={() => props.handleRemove(cadastro)}
                        />
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}