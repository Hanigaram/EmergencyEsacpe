import React from 'react'
import { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class Input extends Component {

  state = {

    myTextInput: ''
  }

  onChangeInput = event => {

    this.setState({

      myTextInput : event
    })
  }
  
  
  render() {
    return (
      <View>

        <TextInput
          value = { this.state.myTextInput }
          style = { styles.input }
          onChangeText = { this.onChangeInput }
        ></TextInput>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  input : {

    width : '100%',
    backgroundColor : '#FFB6C1',
    //marginTop : 10,
    fontSize : 15,
    padding : 8
  }
})

export default Input