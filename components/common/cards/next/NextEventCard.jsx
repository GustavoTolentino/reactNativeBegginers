import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './NextEventCard.style';
import { TouchableOpacity } from 'react-native-gesture-handler'

const NextEventCard = ({ dia, mes, ano, imagem, dimension }) => {
  console.log('Imagem do card evento: ' + imagem);
  return (
    <TouchableOpacity style={styles.nextEventCardWrapper}>
      <View style={styles.dataArea}>
        <Text style={styles.mesText}>{mes}</Text>
        <Text style={styles.diaText}>{dia}</Text>
        <Text style={styles.anoText}>{ano}</Text>
      </View>
      <View>
      <TouchableOpacity>

        <Image 
          source={{imagem}} 
          style={styles.imgEventCard(dimension)} 
          // alt={desc}
          resizeMode='contain'
        />
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default NextEventCard;