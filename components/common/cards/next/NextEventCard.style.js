import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
    nextEventCardWrapper: {
        width: 250,
        padding: SIZES.medium,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        marginTop: 10,
    },
    dataArea: {
        flexDirection: 'column',
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderColor: '#c4c4c4',
        borderRadius: 20,
        borderWidth: 1,
    },
    mesText: {
       fontSize: SIZES.small,
       fontFamily: FONT.regular,
    },
    diaText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.bold,
    },
    anoText: {
        fontSize: SIZES.small,
        fontFamily: FONT.regular,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
});

export default styles;