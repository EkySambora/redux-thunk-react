import React from 'react'

export default function Son ({increment, decrement}){
    return (
        <>
            <button onClick={increment}>PLus</button>
            <button onClick={decrement}>Minus</button>
        </>
    )
}
