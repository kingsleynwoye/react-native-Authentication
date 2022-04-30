import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import {useEffect, useState, useContext} from "react";
import { AuthContext } from '../store/Auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] =useState('');

  const authCtx = useContext(AuthContext); 
  const token = authCtx.token;

useEffect(() => {
  axios.get(
    "https://react-native-project-d0246-default-rtdb.firebaseio.com/message.json?auth=" + token
    ).then((response) => {
     setFetchedMessage(response.data);
    });
}, [token])

  return (
    <View style={styles.rootContainer}>
      <Image source={require("../assets/download.jpeg")} style={styles.image}/>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
   borderRadius: 10,
  },
});