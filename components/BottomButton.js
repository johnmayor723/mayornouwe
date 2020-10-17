import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import PropTypes from "prop-types";


export default class BottomButton extends Component {
  
  render() {
    return (
      
      <View style={styles.bottomButton}>
       <View>
              <Text>Set Time</Text>
              <TextInput placeholder = "set time" 
              onChangeText={}   
              style={styles.textInput}
              autoCapitalize="none"
              />
              <Text>Set Date</Text>
              <TextInput placeholder = "set date" 
              onChangeText={}   
              style={styles.textInput}
              autoCapitalize="none"
              />
              <Text>Description</Text>
              <TextInput placeholder = "description" 
              onChangeText={}   
              style={styles.textInput}
              autoCapitalize="none"
              />
        </View>
        <TouchableOpacity onPress={() => this.props.onPressFunction()}>
          <View>
            <Text style={styles.bottomButtonText}>{this.props.buttonText}</Text>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

BottomButton.propTypes = {
  onPressFunction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  bottomButton: {
    backgroundColor: "black",
    marginTop: "auto",
    margin: 20,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: "center"
  },
  bottomButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600"
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  }
});