import React from 'react';
import { View, Text } from 'react-native';

// import styles from './popularjobs.style';
import NextEventCard from '../../common/cards/next/NextEventCard';
import { images } from '../../../constants';

const NextEvents = () => {
    // const eventos = [
    //     {desc: 'Engenharia da mente', dia: '18', mes: 'MAIO', ano: '2023'},
    //     {desc: 'World Neurotechnology', dia: '23', mes: 'MAIO', ano: '2023'},
    //     {desc: 'WNF Virtual Reality', dia: '12', mes: 'MAIO', ano: '2023'},
    //     {desc: 'Convencao de neurotecnologia', dia: '10', mes: 'MAIO', ano: '2023'},
    //     {desc: 'Brain Tech Summit', dia: '21', mes: 'MAIO', ano: '2023'},
    //     {desc: 'Apresentacoes sobre neurotecnologia', dia: '30', mes: 'MAIO', ano: '2023'},
    // ]

    return (
    <View>
      <Text>Próximos Eventos</Text>
      <View>
        {/* {eventos.map((evento) => {

        })} */}
        {/* <NextEventCard 
            dia={eventos[0].dia}
            mes={eventos[0].mes}
            ano={eventos[0].ano}
            image={images.cardEvento1}
            desc={eventos[0].desc}
        /> */}
        <NextEventCard 
            dia='10'
            mes='Junho'
            ano='2023'
            imagem={images.cardEvento1}
            desc='Evento de neurotec'
            dimension='60%'
        />
      </View>
    </View>
  )
}

export default NextEvents;