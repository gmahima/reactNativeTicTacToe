import React, {useState, createContext, useEffect} from 'react'

export const GameContext = createContext(null)

export const Provider = ({children}) => {
    const [values, setValues] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('running')
    const [turn, setTurn] = useState(2)
    const reset = () => {
        setValues(arr)
    }
    const mark = (i) => {
        const squares = values.slice();
        if(turn === 1) {squares[i] = 'X';}
        else {squares[i] = 'O';}
        setValues(squares)

    }
    useEffect(() => {
        if(turn === 1) {
            setTurn(2)
        }
        else{
            setTurn(1)
        }

    }, [values])

    return(
        <GameContext.Provider value={{
            values,
            status,
            turn,

            actions: {
                reset,
                mark
            }
        }}>
            {children}
        </GameContext.Provider>
    )
}