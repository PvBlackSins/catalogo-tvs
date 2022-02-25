import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Tvs from '../Tvs';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Tvs img={require('../../assets/1.png')} cost="R$ 1499,99">
                        LG TV LED
                    </Tvs>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Tvs img={require('../../assets/4.png')} cost="R$ 2599,99">
                        PHILCO TV LED
                    </Tvs>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Tvs img={require('../../assets/6.png')} cost="R$ 3399,99">
                        SONY TV LED
                    </Tvs>
                </View>

           </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Raleway_600SemiBold',
        marginVertical: '2%',
        alignSelf: 'center'
    }
});