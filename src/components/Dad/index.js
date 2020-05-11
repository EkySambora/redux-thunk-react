import React from 'react'
import Son from '../Son'

export default function Dad({increment, decrement}){
    return (
        <Son increment={increment} decrement={decrement} />
    )
}