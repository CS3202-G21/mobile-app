import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookings Page</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
