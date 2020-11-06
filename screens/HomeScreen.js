import React from 'react';

import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {
  return (
    <Animatable.View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} animation="fadeInUpBig">
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}></Button>
    </Animatable.View>
  );
};

export default HomeScreen;
