import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Orders Page</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
