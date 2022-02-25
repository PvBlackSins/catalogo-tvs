import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonWhat(props) {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
           <Text style={styles.title}>LCD, LED ou Plasma?</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#F58B47',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#000'
    }
})