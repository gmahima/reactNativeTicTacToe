
import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Board from './Board'
import {Provider,Context} from './Context'

import styled from 'styled-components'
const App = () => {
  return (
    <Provider>
      <Board />
    </Provider>
    
  );
};


const Title = styled.Text`
font-size: 20px;
font-weight: 500;
color: palevioletred;
`;
export default App;
// import React from 'react';
// import styled from 'styled-components';

// export default class App extends React.Component {
//     render() {
//         return (
//             <Container>
//                 <Title>React Native with 💅 Styled Components</Title>
//             </Container>
//         );
//     }
// }

// const Container = styled.View`
//     flex: 1;
//     background-color: papayawhip;
//     justify-content: center;
//     align-items: center;
// `;

// const Title = styled.Text`
//     font-size: 24px;
//     font-weight: 500;
//     color: palevioletred;
// `;