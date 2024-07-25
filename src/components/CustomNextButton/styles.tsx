import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#39A7FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: width * 0.8, // ajustado a 80% como probablemente se esperaba originalmente
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    elevation: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
