import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RoomsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Rooms Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
