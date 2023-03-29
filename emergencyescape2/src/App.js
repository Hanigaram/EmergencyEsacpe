import React from 'react'
import { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import Input from './Input'

class App extends Component {

  render() {

    return (

      <View
      style = { styles.mainView }>

          <View
          style = { styles.subView }>

          <Text
            style = { styles.ID }>ID</Text>

          <Input
            style = { styles.Input }></Input>

          <Text
            style = { styles.Password }>Password</Text>

          <Input
            style = { styles.Input }></Input>

          <TouchableOpacity
            style = { styles.Button }>
            
            <Text
              style = { styles.ButtonText }>Login</Text>
            
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  mainView : {

    flex : 1,
    //width : '100%',
    //height : '100%',
    //resizeMode : 'stretch',
    backgroundColor : '#FFEBCD',
    //paddingTop : 100,
    alignItems : 'center',
    justifyContent : 'center'
  },

  subView : {

    flex : 2,
    width : '20%',
    //height : '100%',
    //resizeMode : 'stretch',
    backgroundColor : '#FFEBCD',
    //paddingTop : 100,
    marginTop : 600

  },

  Button : {

    backgroundColor : '#FF4500',
    alignItems : 'center',
    padding : '10%',
    width : '5%',
    height : '5'
  },

  ButtonText : {

    fontSize : 20,
    color : '#FFFFFF'
  },

  ID : {

    fontSize : 20,
    fontWeight : 'normal',
    color : 'black',
    padding : 5
  },

  Password : {

    fontSize : 20,
    fontWeight : 'normal',
    color : 'black',
    padding : 5
  }


})

export default App
