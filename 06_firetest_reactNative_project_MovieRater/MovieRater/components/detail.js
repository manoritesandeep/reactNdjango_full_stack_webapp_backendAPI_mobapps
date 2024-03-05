import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Detail(props) {

    // // get params from parent
    // const myParams = props.navigation.getParam('movie', null)
    const movie = props.navigation.getParam('movie', null);
    const token = props.navigation.getParam('token', '');
    const [ highlight, setHighlight ] = useState(0);

    const rateClicked = () => {
        if(highlight > 0 && highlight < 6) {
            fetch(`http://10.10.14.52:8000/api/movies/${movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${token}`
                'Authorization': 'Token fbcea00e3a28e96a41e8bc4dc4788ebb8e10a65a'
            },
            body: JSON.stringify({stars: highlight})
        })
        .then(console.log('rateClicked token print', token))
        .then( resp => resp.json())
        .then( resp => {
            setHighlight(0);
            Alert.alert("Rated", resp.message);
        })
        .catch(error => Alert.alert("Error", error));
        // .catch(error => console.log(error));
        }
    }

    return (
        <View style={styles.container}>
            {/* <Text>Details about {movie.title} </Text> */}
            <Text style={styles.description}>Decription: {movie.description} </Text>
            <View style={styles.starContainer} >
                <FontAwesomeIcon style={movie.avg_movie_rating > 0 ? styles.orange : styles.white} icon={faStar} />
                <FontAwesomeIcon style={movie.avg_movie_rating > 1 ? styles.orange : styles.white}  icon={faStar} />
                <FontAwesomeIcon style={movie.avg_movie_rating > 2 ? styles.orange : styles.white}  icon={faStar} />
                <FontAwesomeIcon style={movie.avg_movie_rating > 3 ? styles.orange : styles.white}  icon={faStar} />
                <FontAwesomeIcon style={movie.avg_movie_rating > 4 ? styles.orange : styles.white}  icon={faStar} />
                <Text style={styles.white}>({movie.num_movie_ratings})</Text>
            </View>

            {/* Create a new section */}
            <View style={{borderBottomColor: 'white', borderBottomWidth: 2}}/>
            <Text style={styles.description}>Rate it!!! </Text>

            <View style={styles.starContainer} >
                {/* the onPress event is not supported by the FontAwesomeIcon component. 
                To fix this issue, you can wrap the FontAwesomeIcon component inside a TouchableOpacity componen */}
                <TouchableOpacity onPress={() => setHighlight(1)}>
                    <FontAwesomeIcon style={highlight > 0 ? styles.purple : styles.grey} icon={faStar} size={48} /> 
                </TouchableOpacity>              
                <TouchableOpacity onPress={() => setHighlight(2)}>
                     <FontAwesomeIcon style={highlight > 1 ? styles.purple : styles.grey} icon={faStar} size={48} />
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => setHighlight(3)}>
                    <FontAwesomeIcon style={highlight > 2 ? styles.purple : styles.grey} icon={faStar} size={48} />
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => setHighlight(4)}>
                     <FontAwesomeIcon style={highlight > 3 ? styles.purple : styles.grey} icon={faStar} size={48} />
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => setHighlight(5)}>
                    <FontAwesomeIcon style={highlight > 4 ? styles.purple : styles.grey} icon={faStar} size={48} />
                </TouchableOpacity>  
            </View>
            <Button title="Rate" onPress={() => rateClicked()} />
        </View>
    );
}

Detail.navigationOptions = screenProps => ({
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
        <Button title='Edit' color='white'
            onPress={() => screenProps.navigation.navigate("Edit", {movie: screenProps.navigation.getParam("movie")})}/>
    )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10,
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
  },
  description: {
    fontSize: 20,
    color: '#fff',
    padding: 10
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  orange: {
    color: 'orange'
  },
  white: {
    color: 'white'
  },
  purple: {
    color: 'purple'
  },
  grey: {
    color: 'grey'
  }
});
