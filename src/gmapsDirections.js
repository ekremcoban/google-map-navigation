import React, { Component } from 'react';
import { View, Button } from 'react-native';
import getDirections from 'react-native-google-maps-directions';

class gmapsDirections extends Component {

  handleGetDirections = () => {
    const data = {
      source: {
        latitude: 40.996166,
        longitude: 29.1775284,
      },
      destination: {
        latitude: 41.006166,
        longitude: 29.1775284,
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  }

  render() {
    return (
      <View>
        <Button onPress={this.handleGetDirections} title="Go to Navigation" />
      </View>
    );
  }
}

export default gmapsDirections