import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView,
         StyleSheet, Text, TextInput, 
         View, Image, ImageBackground } from 'react-native';

export default function Home(props) {
    
    const [name, setName] = useState('ByteMe')

    return (
        <View style={styles.home}>            
            {/* <Image style={{width: '100%', height: 250}}
                source={require('../assets/apples.jpg')} /> */}
            {/* Add image background */}
            <ImageBackground style={{width: '100%', height: '100%'}}
                source={require('../assets/apples.jpg')}>
            <FlatList 
                data = {[
                    {key: "ByteMe"},
                    {key: "ByteMe 1"},
                    {key: "ByteMe 2"},
                    {key: "ByteMe 3"},
                    {key: "ByteMe 4"},
                    {key: "ByteMe 5"},
                    {key: "ByteMe 6"},
                ]}
                renderItem={
                    ({item}) => <Text style={styles.text}>{item.key}</Text>
                }            
            />
            
            <ScrollView>
                {/* Scroll view allows for multiple items but FlatList is best for tabular data. */}
                <Text>Scroll view: Scroll the text below </Text>
                <Text style={styles.text}>1 {name}</Text>
                <Text style={styles.text}>2 {name}</Text>
                <Text style={styles.text}>3 {name}</Text>
                <Text style={styles.text}>4 {name}</Text>
                <Text style={styles.text}>last {name}</Text>
                </ScrollView>
                
                <TextInput 
                style={{height: 40, backgroundColor:'red'}}
                value={name}
                placeholder='type in your name'
                onChangeText={(text) => setName(text)}
                />
            <StatusBar style="auto" />

            <Button 
                onPress={() => alert(name + " clicked the button!")}
                title="Click me!"
            />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
//   },
//   name: {
//     // color:'#00ff00',
//     marginBottom:30
  },
  text: {
    fontSize: 40,
    color: 'red'
  }
});
