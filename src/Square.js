import React from 'react'
import styled from 'styled-components'
import {Text} from 'react-native'


const Square = ({i}) => {
    return(
        <Tile>
            <Val>
                {i}
            </Val>
        </Tile>
    )
}


const Tile = styled.View`
    borderWidth: 1;
    width: 100;
    height: 100;
    alignItems: center;
    justifyContent: center;

`
const Val = styled.Text`
font-size: 20px;
font-weight: 500;
color: palevioletred;
    
`

export default Square