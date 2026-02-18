import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
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
