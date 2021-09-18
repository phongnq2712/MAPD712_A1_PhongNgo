/**
 * MAPD712_Assignment1
 * Author     : Phong Ngo
 * Student ID : 301148406
 * Date       : 17/09/2021
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  View
} from 'react-native';

// export default class App extends React.Component {
const App = () => {
  const [checked, setChecked] = useState('standard');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState();
  const [bmiText, setBmiText] = useState('');
  const [placeholderHeight, setPlaceholderHeight] = useState('cm');
  const [placeholderWeight, setPlaceholderWeight] = useState('kg');

  // calculateBMI = (height, weight) => {
  setRadioStandard = () => {
    setChecked('standard');
    setPlaceholderHeight('cm');
    setPlaceholderWeight('kg');
  }

  setRadioMetric = () => {
    setChecked('metric');
    setPlaceholderHeight('inch');
    setPlaceholderWeight('lbs');
  }

  calculateBMI = () => {    
    var resultBMI = 0;
    setHeight(height);
    setWeight(weight);
    
    if(height <= 0) {
      alert('Please enter valid your height');
      return;
    }
    if(weight <= 0) {
      alert('Please enter valid your weight');
      return;
    }
    // standard mode (kg/cm)
    if(checked == 'standard') {
      resultBMI = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
    } else if(checked == 'metric') {
      // metric mode (inch/lbs)
      resultBMI = (parseFloat(weight)*703)/(parseFloat(height)*parseFloat(height));
    }
    
    resultBMI = resultBMI.toFixed(2);
    // display result
    setBmi(resultBMI);
    if(resultBMI < 18.5) {
      setBmiText('Underweight');
    } else if(resultBMI >= 18.5 && resultBMI < 25) {
      setBmiText('Normal weight');
    } else if(resultBMI >= 25 && resultBMI < 30) {
      setBmiText('Overweight');
    } else {
      setBmiText('Obesity');
    }
  }
  
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
        <View style={styles.modeView}>
          <Text style={{padding:5}}>Standard</Text>
          <RadioButton
            value="standard"        
            status={checked === 'standard' ? 'checked' : 'unchecked'}
            // onPress={() => setChecked('standard')}
            onPress={() => this.setRadioStandard()}
          ></RadioButton>
          <Text style={{padding:5}}>Metric</Text>
          <RadioButton
            value="metric"
            status={checked === 'metric' ? 'checked' : 'unchecked'}
            // onPress={() => setChecked('metric')}
            onPress={() => this.setRadioMetric()}
          />          
        </View>        
        <View style={styles.subView}>
          <Text style = {styles.lblSubTitle}>My Height</Text>
          <TextInput
            placeholder={placeholderHeight}
            keyboardType="number-pad"
            style={styles.input}
            defaultValue={height}
            onChangeText={height => setHeight(height)}
            
          />
        </View>
        <View style={styles.subView}>
          <Text style = {styles.lblSubTitle}>My Weight</Text>
          <TextInput
            placeholder={placeholderWeight}
            keyboardType="number-pad"
            style={styles.input}
            defaultValue={weight}
            onChangeText={weight => setWeight(weight)}
          />
        </View>
        <View style={styles.lblSubmit}>
          <TouchableOpacity
            style = {styles.btnSubmit}
            onPress={() => this.calculateBMI()}
            >
            <Text style = {styles.btnSubmitText}>Compute BMI</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style = {styles.lblResult}>{bmi}</Text>
          <Text style = {styles.lblResult}>{bmiText}</Text>
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
  modeView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignSelf: "center",
    margin: 20
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
  lblSubmit: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSubmit: {
    backgroundColor: '#036980',
    padding: 5,
    margin: 20,
    height: 40,
    width: 150
  },
  btnMode: {
    backgroundColor: '#FF921B',
    padding: 1,
    margin: 20,
    height: 30,
    width: 120
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
export default App;