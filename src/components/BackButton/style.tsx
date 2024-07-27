import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 5,
    // SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon :{
    color: '#39A7FF',
  }
});

export default styles;