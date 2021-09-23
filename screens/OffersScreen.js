import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OffersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Offers Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
