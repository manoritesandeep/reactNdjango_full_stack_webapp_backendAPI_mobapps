// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Home from './components/home';
import Detail from './components/detail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  "WhatttMart Home": {screen: Home},
  Details: {screen: Detail}
})

const App = createAppContainer(AppNavigator);

export default App;


// export default function App() {
//   return (
//     <Home msg="Hello from react native!!!" />
//   );
// }
