import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import AppHeader from '../Component/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class ReadScreen extends React.Component{

    constructor(){
        super()
    
    this.state={settitle:''}
    this.state={setauthore:''}
    this.state={setmail:''}
    
      }

      title =() =>{
        db.ref('/').update({
            'title': this.state.settitle
          })
        }

        authore =() =>{
            db.ref('/').update({
                'author': this.state.settitle
              })
            }

            mail =() =>{
                db.ref('/').update({
                    'mail': this.state.settitle
                  })
                }

    render(){
        return(
            <View>
                <AppHeader/>

                <Text style={styles.title}>Write Screen</Text>

                <TextInput placeholder="Book Title" style={styles.rel} onChangeText={text=>{this.setState({settitle:text})}}/>

                <TextInput placeholder="Auther" style={styles.rel} onChangeText={text=>{this.setState({setauthore:text})}}/>

                <TextInput placeholder="Write Here" style={styles.main} onChangeText={text=>{this.setState({setmail:text})}}/>

                <Button title="Submit" style={{marginTop: 10,}} onPress={()=>{this.title(),this.authore(),this.mail()}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 20,
        textAlign: 'center',
    },

    rel:{
        height: 30,
        borderWidth: 2,
        marginTop: 20,
        width: 400,
        marginLeft: 470,
        textAlign: 'center',
    },

    main:{
        height: 200,
        borderWidth: 2,
        marginTop: 20,
        width: 400,
        marginLeft: 470,
        marginBottom: 50,
        textAlign: 'center',
    },

  
});