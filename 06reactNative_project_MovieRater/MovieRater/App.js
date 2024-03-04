import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './components/list';
import Detail from './components/detail';
import Edit from './components/edit';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
  Detail: {screen: Detail},
  Edit: {screen: Edit}
})

const App = createAppContainer(AppNavigator);

export default App;


// export default function App() {
//   return (
//     <MovieList />
//   );
// }
