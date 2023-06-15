import React from 'react'
import { View, Text } from 'react-native'

import styles from './NextEventCard.style';
import { TouchableOpacity } from 'react-native-gesture-handler'

const NextEventCard = ({ dia, mes, ano, image, desc }) => {
  return (
    <TouchableOpacity style={styles.nextEventCardWrapper}>
      <View style={styles.dataArea}>
        <Text style={styles.mesText}>{mes}</Text>
        <Text style={styles.diaText}>{dia}</Text>
        <Text style={styles.anoText}>{ano}</Text>
      </View>
      <View>
        <Image source={image} style={styles.bannerImage} alt={desc}/>
      </View>
    </TouchableOpacity>
  )
}

export default NextEventCard;