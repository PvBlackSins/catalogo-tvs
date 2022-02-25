import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Description({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Descrição'
  })
 return (
  <ScrollView style={styles.container}>
    <View>
         <Text style={ [styles.title, {fontSize: 24} ]}>PLASMA:</Text>
       </View>
       <View opacity={0.7}>
         <Text style={ [styles.title, {fontSize: 16} ]}>As TVs de plasma revolucionaram o mercado de televisões, já que foram os primeiros modelos a trazerem telas planas e mais finas que as antigas TVs de tubo. A televisão de plasma trazia minúsculas lâmpadas fluorescentes com plasma em seu interior - que nada mais era que um gás carregado eletricamente. Assim eram criados os pixels na tela.</Text>
       </View>
    <View>
         <Text style={ [styles.title, {fontSize: 24} ]}>LCD:</Text>
       </View>
       <View opacity={0.7}>
         <Text style={ [styles.title, {fontSize: 16} ]}>LCD é uma sigla que significa Display de Cristal Líquido. Isso porque esse tipo de tela usa o cristal líquido para transmitir as imagens, projetadas por um painel luminoso que fica localizado atrás da tela, chamado de backlight.</Text>
       </View>
    <View>
         <Text style={ [styles.title, {fontSize: 24} ]}>LED:</Text>
       </View>
       <View opacity={0.7}>
         <Text style={ [styles.title, {fontSize: 16} ]}>A televisão LED tem, na verdade, uma tela LCD, mas iluminada por trás com lâmpadas de LED, mais brilhantes e que consomem menos energia. A real diferença entre a qualidade da TV LED e LCD será mais nítida a partir de uma TV 32". Em TVs menores, fica praticamente impossível ver diferença.</Text>
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
  title:{
    fontFamily: 'Raleway_600SemiBold',
    paddingHorizontal: '4%'
  },
});