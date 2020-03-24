import React, {useContext} from 'react'
import styled from 'styled-components'
import {Text, TouchableOpacity} from 'react-native'
import {GameContext} from './Context'

const Square = ({i}) => {
    const c = useContext(GameContext)

    return(
        <TouchableOpacity onPress={() => {
        if(c.isRunning=== true) {c.actions.mark(i)}
        }}> 
        <Tile>
            <Val>
                {c.values[i]}
            </Val>
        </Tile>
        </TouchableOpacity>
    )
}


const Tile = styled.View`
    borderWidth: 1;
    borderColor: white
    width: 100;
    height: 100;
    alignItems: center;
    justifyContent: center;

`
const Val = styled.Text`
font-size: 20px;
font-weight: 500;
color: white;
    
`

export default Square