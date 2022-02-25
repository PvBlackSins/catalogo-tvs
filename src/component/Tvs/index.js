import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Detail4 from'../../pages/Detail4';

export default function Tvs(props) {

 function filterDesc(desc){
     if(desc.length < 27){
         return desc;
     }

     return `${desc.substring(0, 18)}...`;
 }

 return (

   <TouchableOpacity style={styles.container} onPress={props.onClick}>
       <Image
        source={props.img}
        style={styles.tvsImg}
       />
       <Text style={styles.tvsText}>
           {filterDesc(props.children)}
       </Text>
       <View opacity={0.4}>
        <Text style={styles.tvsText}> {props.cost} </Text>
       </View>
       <Text style={styles.tvsDescription}> {props.description} </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tvsImg:{
        width: 175,
        height: 175
    },
    tvsText:{
        fontSize: 16
    },
    description:{
        top: 0,
        right: 0,
        position: 'absolute',
        color: '#E63600'
      }
});