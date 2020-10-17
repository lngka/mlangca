import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as tf from '@tensorflow/tfjs'


export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {

    (async () => {
      await tf.ready();
      setReady(true);
    })();
    
  });

  return (
    <View style={styles.container}>
      <Text>TF ready: {isReady ? 'Yes' : 'No'} </Text>
      <StatusBar style="auto" />
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
