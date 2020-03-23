import React, {useState, createContext, useEffect} from 'react'

export const GameContext = createContext(null)

export const Provider = ({children}) => {
    const [values, setValues] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('running')
    const reset = () => {
        setValues(arr)
    }
    const mark = (i) => {
        const squares = values.slice();
        squares[i] = 'X';
        setValues(squares)

    }

    return(
        <GameContext.Provider value={{
            values,
            status,

            actions: {
                reset,
                mark
            }
        }}>
            {children}
        </GameContext.Provider>
    )
}