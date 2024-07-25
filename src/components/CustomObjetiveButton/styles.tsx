import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#87C4FF',
    paddingVertical: 12,
    margin: 20,
    height: height * 0.15,
    paddingHorizontal: 20,
    width: width * 0.8,
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    elevation: 10,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default styles;
