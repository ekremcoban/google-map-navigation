/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import G from './src/gmapsDirections';


class App extends Component {
      render() {
        return (
            <View style={style.container}>
                <G/>
            </View>
        )
    }
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default App;
