import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'
export default class WriteScreen extends React.Component {
    constructor(){
        super();
        this.state={
          AuthorName:  "",
          Title :"",
          Story:""
        }
      }

      submitStory=async()=>{
        db.collection("Stories").doc(this.state.Title).set({
            Title:this.state.Title,
            Story:this.state.Story,
            AuthorName:this.state.AuthorName
        })}
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.head}>
                Write Stories
            </Text>
                <View style={styles.inputView}>
            <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ AuthorName: text });
            }}
            placeholder="Author Name"
            value={this.state.AuthorName}
            />
            <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ Title: text });
            }}
            placeholder="Title"
            value={this.state.Title}
            />
            <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ Story: text });
            }}
            placeholder="Story"
            value={this.state.Story}
            />
            <TouchableOpacity style={styles.submitButton} 
            onPress={async ()=>{
             await this.submitStory();

            }}>
              <Text style={styles.buttonText}>
                Submit
              </Text>
            </TouchableOpacity>
            </View>

            </View>
            
        )}
    
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    displaytext:{
      fontSize:15,
      textDecorationLine:'underline'
    },
    displaytext:{
      fontSize:25,
      textAlign:'center'
    },
    submitButton:{
      backgroundColor:'green',
      padding:10,
      margin:10
    },
    buttonText:{
      fontSize:15,
      textAlign:'center',
      marginTop:10
    },
    inputView:{
      flexDirection:'row',
      margin:20
    },
    inputBox:{
      width:200,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20
    },
    storyBox:{
      width:200,
      height:500,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:15
    },
  }
  )