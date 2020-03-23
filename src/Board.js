import React, {useContext} from 'react'
import styled from 'styled-components'

import Square from './Square'


const Board = () => {
    return(
        <Container>
            <Row>
                <Square i={0} />
                <Square i={1} />
                <Square i={2} />
            </Row>
            <Row>
                <Square i={3} />
                <Square i={4} />
                <Square i={5} />
            </Row>
            <Row>
                <Square i={6} />
                <Square i={7} />
                <Square i={8} />
            </Row>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`

const Row = styled.View`
    flexDirection: row

`
export default Board