import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Button from'../../component/Button';
import Footer from'../../component/Footer';

export default function Detail5({ navigation }) {

  navigation.setOptions({
    headerTitle: 'SAMSUNG TV LCD'
  })

 return (

   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail5.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <Text style={ [styles.title, {fontSize: 24} ]}>R$ 1149,99</Text>
       </View>
       <View opacity={0.4}>
         <Text style={ [styles.title, {fontSize: 30} ]}>SAMSUNG TV LCD</Text>
       </View>

       <View style={styles.textContent}>
        
         <Text style={styles.textContent}>
         A linha de TVs 4K da LG sempre supera as expectativas. Com ela, você experimenta qualidade de imagem realista e cores muito mais vivas, com até 4x mais precisão de pixels do que um modelo em Full HD. Tudo isso movido com o super processador a5. Um inovador chip que remove ruídos gráficos, acentua contrastes e cria cores muito mais vibrantes. E com o 4K Upscaler, as imagens em resoluções menores são trabalhadas e aprimoradas para ficarem o mA linha de TVs 4K da LG sempre supera as expectativas. Com ela, você experimenta qualidade de imagem realista e cores muito mais vivas, com até 4x mais precisão de pixels do que um modelo em Full HD. Tudo isso movido com o super processador a5. Um inovador chip que remove ruídos gráficos, acentua contrastes e cria cores muito mais vibrantes. E com o 4K Upscaler, as imagens em resoluções menores são trabalhadas e aprimoradas para ficarem o mais próximo possível da resolução 4K que você deseja.ais próximo possível da resolução 4K que você deseja.
         </Text>
         <Text style={styles.textList}>
           -Tamanho da tela: 32"
         </Text>
         <Text style={styles.textList}>
           -Marca: LG
         </Text>
         <Text style={styles.textList}>
           -Resolução: 4K
         </Text>
         <Text style={styles.textList}>
           -Tecnologia de conectividade: Wi-fi
         </Text>
         <Text style={styles.textList}>
           -Sistema operacional: Android TV
         </Text>

         <Button/>

         <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image:{
    width: '100%',
    justifyContent: 'center'
  },
  title:{
    fontFamily: 'Raleway_600SemiBold',
    paddingHorizontal: '4%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%',
  },
  textList:{
    fontSize:16,
    lineHeight: 25,
    paddingHorizontal: '2%'
  }
});