import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Edit(props) {

    // // get params from parent
    // const myParams = props.navigation.getParam('movie', null)
    const movie = props.navigation.getParam('movie', null)
    const [title, setTitle] = useState(movie.title)
    const [description, setDescription] = useState(movie.description)

    const saveMovie = () => {
        fetch(`http://10.10.14.52:8000/api/movies/${movie.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'
            },
            body: JSON.stringify({title: title, description: description})
        })
        .then( resp => resp.json())
        // .then( movie => {console.log(movie)})
        .then( movie => {
            props.navigation.navigate("Detail", {movie: movie, title: movie.title})
        })
        .catch(error => console.log(error))
        // props.navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput 
                style={styles.input}
                placeholder='Title'
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput 
                style={styles.input}
                placeholder='Description'
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <Button onPress={() => saveMovie()} title='Save' />    
        </View>
    );
}

Edit.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam('title'),
    headerStyle: {
        backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
  },
  label: {
    fontSize: 24,
    color: '#fff',
    padding: 10
  },
  input: {
    fontSize: 24,
    backgroundColor: 'white',
    padding: 10,
    margin: 10
  }
});
