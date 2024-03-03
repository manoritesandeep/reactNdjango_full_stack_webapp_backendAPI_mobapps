import React from 'react';
import { View, Text } from 'react-native';


export default class Detail extends React.Component {

    static navigationOptions = {
        title: "Details"
    }

    render() {
        return (
            <View>
                <Text>Details page here</Text>
            </View>
        )
    }
}

