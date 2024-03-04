import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MovieList(props) {

    // create hooks to get data..
    // const [movies, setMovies] = useState([{title:'movie 1', title:'movie 2', title:'movie 3'}])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://10.10.14.52:8000/api/movies/',
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'
            },
        }).then( response => response.json())
        .then( jsonresp => setMovies(jsonresp))
        .catch( error => console.log(error))
    })

    const movieClicked = movie => {
        props.navigation.navigate('Detail', {movie: movie, title: movie.title})
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
