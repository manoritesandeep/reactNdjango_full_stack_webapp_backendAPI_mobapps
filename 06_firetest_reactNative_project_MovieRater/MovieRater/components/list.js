import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MovieList(props) {

    // create hooks to get data..
    // const [movies, setMovies] = useState([{title:'movie 1', title:'movie 2', title:'movie 3'}])
    const [movies, setMovies] = useState([])

    let token = null;

    const getData = async () => {
        token = await AsyncStorage.getItem('MR_Token');
        if(token) {
            getMovies();
        } else {
            // else navigate them to the login page
            props.navigation.navigate('Auth')
        }
    };

    useEffect(() => {
        getData();

    }, []);

    const getMovies = () => {
        console.log('getMovies token print:', token);
        fetch('http://10.10.14.52:8000/api/movies/',
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then( response => response.json())
        .then( jsonresp => setMovies(jsonresp))
        .catch( error => console.log(error))
    }

    const movieClicked = movie => {
        props.navigation.navigate('Detail', {movie: movie, title: movie.title, token: token})
    }

    return (
        <View>
            <Image source={require('../assets/movieRater_logo.png')} 
                style={{width: '100%', height: 150, paddingTop:30, backgroundColor:'black'}} 
                        resizeMode="contain"/>
            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => movieClicked(item)}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <StatusBar style="auto" />
        </View>
    );
}

MovieList.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam('title'),
    headerStyle: {
        backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    // // Deprecation in 'navigationOptions': // - 'headerRight: <SomeElement />' will be removed in a future version. Use 'headerRight: () => <SomeElement />' instead
    // // to avoid above,  Instead of directly passing the JSX component, you'll define a function that returns the JSX component. 
    headerRight: () => (
        <Button title='Add New' color='white'
            onPress={() => screenProps.navigation.navigate("Edit", {movie: {title: '', description: ''}})}
        />
    )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35'
  },
  itemText: {
    color: '#fff',
    fontSize: 24
  }
});
