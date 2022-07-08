import React from 'react'
import './card.css'

export default function Card({data}){
    return(
        <>
        <section>
            <h3>{data.game}</h3>
            <h4>R$ {data.price}</h4>
            <h4>Cat: {data.category}</h4>
        </section>

        </>
    )
}