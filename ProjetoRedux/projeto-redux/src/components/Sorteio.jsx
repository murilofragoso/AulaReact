import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    const aleatorio = Math.floor(Math.random() * (max - min)) + min
    return (
        <Card title='Sorteio dos números' purple>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>        
    )
}