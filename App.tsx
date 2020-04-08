import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
