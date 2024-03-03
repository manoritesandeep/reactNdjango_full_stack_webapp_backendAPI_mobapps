import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home(props) {
    
    const [name, setName] = useState('ByteMe')

    return (
        <View style={styles.home}>
            <Text style={styles.name}>{name}</Text>
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

        </View>
    );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    // color:'#00ff00',
    marginBottom:30
  }
});
