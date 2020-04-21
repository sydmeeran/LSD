  
import React, { useState } from 'react';
// import { AppLoading } from 'expo';
// import Navigator from './route/NavigDraw'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

export default function Home() {

  return(

    <View style={styles.home}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}> 
            <ImageBackground source= {require('../assets/images/Kitchen.jpg')} style={styles.image}>
                <View style={styles.textcontainer}>
                <Text style={styles.text}>
                        Kitchen
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <ImageBackground source= {require('../assets/images/Store.jpg')} style={styles.image}>
                <View style={styles.textcontainer}>
                <Text style={styles.text}>
                        Store
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    

    </View>
  
  )
  }

  const styles=StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor:'#e8e8e8',

    },
    text: {
        fontFamily: 'Roboto-MediumItalic',
        color: '#d00f16',
        marginLeft: 16,
        fontSize: 45
    },
    image:{
        justifyContent: 'flex-end',
        resizeMode:'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2.5,
        marginTop:10
        
    },

    textcontainer:{
        backgroundColor:'rgba(0,0,0,0.75)',
        width: Dimensions.get('window').width,
        height: 60,
        justifyContent: 'center',
        marginBottom: 12
    },

    // button:{

    // }

  })
