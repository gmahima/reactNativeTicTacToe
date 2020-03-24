import React, {useState, createContext, useEffect} from 'react'

export const GameContext = createContext(null)

export const Provider = ({children}) => {
    const [values, setValues] = useState(Array(9).fill(''));
    const [isRunning, setIsRunning] = useState(true)
    const [turn, setTurn] = useState(2)
    const [winner, setWinner] = useState(0);
    const reset = () => {
        setValues(arr)
    }
    const mark = (i) => {
        if(values[i] === '') {
        const squares = values.slice();
        if(turn === 1) {squares[i] = 'X';}
        else {squares[i] = 'O';}
        setValues(squares) }

    }

    const calcWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for(let i=0; i<lines.length; i++) {
              let [a, b, c] = lines[i];
              if(values[a] && values[a]===values[b] && values[a] ===values[c]) {
                  if (values[a]==='O') {
                      setWinner(2)
                    
                  }
                  else {
                      setWinner(1)
                  }
                  setIsRunning(false)
              }
          }

    }
    const checkDraw = () => {
        console.log(values.find((e) => e===''))
        if(values.find((e) => e==='') === undefined) {
            setIsRunning(false)
        }
    }
    useEffect(() => {
        calcWinner();
        checkDraw();
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
            isRunning,
            turn,
            winner,

            actions: {
                reset,
                mark
            }
        }}>
            {children}
        </GameContext.Provider>
    )
}