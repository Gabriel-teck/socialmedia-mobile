import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily({ baseFont: 'Gabarito', weight: '500' }),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#f35bac',
    borderWidth: 1,
    borderRadius: 65,
    padding: horizontalScale(3),
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default style;
