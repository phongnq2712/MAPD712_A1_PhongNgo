/**
 * MAPD712_Assignment1
 * Author     : Phong Ngo
 * Student ID : 301148406
 * Date       : 17/09/2021
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

export default class App extends React.Component{
  state = {
    height: 0,
    weight: 0,
    bmi: 0,
    bmiText: ''
  }

  calculateBMI = (height, weight) => {
    // standard (kg/cm)
    var resultBMI = 0;
    if(height > 0 && weight > 0) {
      resultBMI = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      resultBMI = resultBMI.toFixed(2);
      // display result
      this.setState({bmi:resultBMI})
      if(resultBMI < 18.5) {
        this.setState({bmiText:'Underweight'});
      } else if(resultBMI >= 18.5 && resultBMI < 25) {
        this.setState({bmiText:'Normal weight'});
      } else if(resultBMI >= 25 && resultBMI < 30) {
        this.setState({bmiText:'Overweight'});
      } else {
        this.setState({bmiText:'Obesity'});
      }
    } else {
      this.setState({bmi:''});
      this.setState({bmiText:'Please enter valid your height and weight'});
    }
  }
  
render() {
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
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={height => {this.setState({height});}}
            
          />
        </View>
        <View style={styles.subView}>
          <Text style = {styles.lblSubTitle}>My Weight</Text>
          <TextInput
            placeholder="kg"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={weight => {this.setState({weight});}}
          />
        </View>
        <View>
          <TouchableOpacity
            style = {styles.btnSubmit}
            onPress={() => this.calculateBMI(this.state.height, this.state.weight)}
            >
            <Text style = {styles.btnSubmitText}>Compute BMI</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style = {styles.lblResult}>{this.state.bmi}</Text>
          <Text style = {styles.lblResult}>{this.state.bmiText}</Text>
        </View>
      </View>
    </ImageBackground>
  );
  }
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
    color: "#000000"
  },
  btnSubmit: {
    backgroundColor: '#036980',
    padding: 5,
    margin: 20,
    height: 40,
  },
  lblResult:{
    textAlign: "center",
    fontSize: 24,
  },
  btnSubmitText:{
    textAlign: "center",
    color: 'white',
    fontSize: 18    
  },
  
});
