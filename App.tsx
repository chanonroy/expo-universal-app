import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './src';

const About = () => <Text>About</Text>;

export default function Main() {
  return (
    <App />
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
