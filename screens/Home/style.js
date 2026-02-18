import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // marginLeft: horizontalScale(6),
    // marginRight: horizontalScale(2),
    marginTop: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#f9fafb',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#f35bac',
    justifyContent: 'center',
    width: horizontalScale(10),
    height: horizontalScale(10),
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    flexDirection: 'row',
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily({ baseFont: 'Gabarito', weight: '600' }),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    // marginHorizontal: 2,
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
