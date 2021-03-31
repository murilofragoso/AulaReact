import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    return (
        <Card title='Soma dos números' blue>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>        
    )
}