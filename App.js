/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

const App = ()=> {
  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text
          style={styles.lblTitle}
        >
          BMI Calculator
        </Text>
        <View style={styles.subView}>
          <Text style = {styles.lblSubTitle}>My Height</Text>
          <TextInput
            placeholder="cm"
            keyboardType="numeric"
            style={styles.input}
            
          />
        </View>
        <View style={styles.subView}>
          <Text style = {styles.lblSubTitle}>My Weight</Text>
          <TextInput
            placeholder="kg"
            keyboardType="numeric"
            style={styles.input}
            
          />
        </View>
        <View>
          <TouchableOpacity
            style = {styles.submitButton}
            >
            <Text style = {styles.submitButtonText}> Calculate </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subView: {
    flexDirection: 'row'
  },
  lblTitle: {
    color: "#830587",
    fontWeight: 'bold',   
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    fontSize: 36
  },
  lblSubTitle: {
    color: '#ff6666',
    fontWeight: 'normal',   
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 24,
    marginTop: 10,
    color: "#FFCB1F"
  },
  submitButton: {
    backgroundColor: '#036980',
    padding: 10,
    margin: 25,
    height: 40,
 },
 submitButtonText:{
    textAlign: "center",
    color: 'white',
    fontSize: 18,
 },
  
});

export default App;
