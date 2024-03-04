import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';


export default function Auth(props) {


    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    useEffect( () => {
        getData();
    })

    const auth = () => {
        fetch(`http://10.10.14.52:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({username: username, password: password})
            body: JSON.stringify({ username, password })
        })
        .then( resp => resp.json())
        // .then( movie => {console.log(movie)})
        // .then( resp => console.log(resp.token))
        .then(resp => {
            console.log('Auth Token', resp.token);
            saveData(resp.token);
            props.navigation.navigate("MovieList");
        })
        .catch(error => console.log(error));
    };    
       
    const saveData = async (token) => {
        await AsyncStorage.setItem('MR_Token', token)
    }
    const getData = async () => {
        const token = await AsyncStorage.getItem('MR_Token');
        console.log('getData token print', token)
        if(token) props.navigation.navigate("MovieList");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
                style={styles.input}
                placeholder='Username'
                onChangeText={text => setUsername(text)}
                value={username}
                autoCapitalize={'none'}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder='Password'
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                autoCapitalize={'none'}
            />
            <Button onPress={() => auth()} title="Login" />    
        </View>
    );
};

Auth.navigationOptions = screenProps => ({
    title: "Login",
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
