import React, {useEffect} from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export default Home;