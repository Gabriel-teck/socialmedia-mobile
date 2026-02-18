import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#eff2f6',
  },
  userContainer: { flexDirection: 'row' },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: 'black',
    fontFamily: getFontFamily({ baseFont: 'Gabarito', weight: '600' }),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#798697',
    fontFamily: getFontFamily({ baseFont: 'Gabarito', weight: '400' }),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'flex-start',
    marginVertical: verticalScale(20),
  },
  userPostStatText: { marginLeft: horizontalScale(3), color: '#79869f' },
  userPostStats: { marginLeft: horizontalScale(10), flexDirection: 'row' },
  userPostStatButton: { flexDirection: 'row' },
  userPoststatButtonRight: { flexDirection: 'row', marginLeft: horizontalScale(27) },
});

export default style;
