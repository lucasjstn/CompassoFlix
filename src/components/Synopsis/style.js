import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function relativeHeight(pixel) {
  return height * (pixel / 812);
}
function relativeWidth(pixel) {
  return width * (pixel / 375);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginLeft: relativeWidth(20),
    marginTop: relativeHeight(30),
  },
  synopsisTitle: {
    fontSize: 12,
    lineHeigth: 16,
    textTransform: 'uppercase',
    color: 'white',
  },
  synopsisContent: {
    fontSize: 12,
    lineHeigth: 16,
    marginTop: relativeHeight(15),
    color: 'white',
    width: relativeWidth(320),
    textAlign: 'left',
  },
  about: {
    fontSize: 12,
    lineHeigth: 16,
    color: '#999',
  },
});

export default styles;
