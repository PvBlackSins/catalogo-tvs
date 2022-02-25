import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonWhat from'../../component/ButtonWhat';

import Tvs from '../../component/Tvs';

export default function Home() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
         source={require('../../assets/banner.png')}
         style={styles.image}
         />

         <View style={styles.textContainer}>
           <Text style={styles.text}>TVS</Text>
           <Text style={[styles.text2, {color: '#CECECF'}]}>-</Text>
           <Text style={[styles.text2, {color: '#CECECF'}]}>MAIS RELEVANTES</Text>

           <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
             <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
             />
           </TouchableOpacity>

           

         </View>

       </View>
       

      <View style={styles.line}/>


      <ScrollView>
        <Text style={styles.text3}>LANÇAMENTOS</Text>


        <ButtonWhat onClick={()=> navigation.navigate('Description')}/>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Tvs img={require('../../assets/1.png')} cost="R$1499,99" onClick={()=> navigation.navigate('Detail')}>
            LG TV LED
          </Tvs>
          <Tvs img={require('../../assets/2.png')} cost="R$1799,99" onClick={()=> navigation.navigate('Detail2')}>
            AOC TV LED
          </Tvs>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Tvs img={require('../../assets/3.png')} cost="R$799,99" onClick={()=> navigation.navigate('Detail3')}>
            PHILCO TV PLASMA
          </Tvs>
          <Tvs img={require('../../assets/4.png')} cost="R$2599,99" onClick={()=> navigation.navigate('Detail4')}>
            PHILCO TV LED
          </Tvs>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Tvs img={require('../../assets/5.png')} cost="R$1149,99" onClick={()=> navigation.navigate('Detail5')}>
            SAMSUNG TV LCD
          </Tvs>
          <Tvs img={require('../../assets/6.png')} cost="R$3399,99" onClick={()=> navigation.navigate('Detail6')}>
            SONY TV LED
          </Tvs>
        </View>
        
      </ScrollView>
       
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8 
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  text2:{
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 20,
    marginHorizontal: '1%',
    marginTop: '1%'
  },
  text3:{
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 20,
    marginHorizontal: '29%',
    marginTop: '2%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
  borderBottomWidth: 2,
  },
  description:{
    top: 0,
    right: 0,
    position: 'absolute',
    color: '#E63600'
  }
});