
import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Board from './Board'
import {Provider,GameContext} from './Context'

import styled from 'styled-components'

console.disableYellowBox = true;
const State = () => {
  const c = useContext(GameContext)
  if (c.isRunning === true)
  return(
    <SubTitle>{`Player: ${c.turn}`}</SubTitle>
  )
  else if(c.winner) return <SubTitle>{`Winner: ${c.winner}`}</SubTitle>

  else {
    return <SubTitle>Draw Match</SubTitle>
  }
}


const Game = () => {
  const c = useContext(GameContext)
  return(
    <Container>
        <Title>Tic Tac Toe</Title>
        
        <State />


        <Board />
        {
          c.isRunning ? (
            null
          ) : (
            <TouchableOpacity onPress={() => {c.actions.reset()}}>
              <Title>Reset</Title>
            </TouchableOpacity>
          )
        }
      </Container>
  )
}

const App = () => {
  return (
    <Provider>
      <Game />
    </Provider>
    
  );
};



export default App;

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: flex-start; 
    align-items: center;         
`;
//justify-content: defines the alignment along the main axis(vertical)
//align-items: This defines the alignment along the cross axis(horizontal)
const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    background-color: white;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
`;
const SubTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 10px;
`;

const StyledButton = styled.Button`
background-color: #4CAF50 !important;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
font-size: 16px;
`