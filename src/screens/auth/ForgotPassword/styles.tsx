import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39A7FF',
  },
  buttonBack :{
    position: 'absolute',
    top: 5,
    left: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
    padding: 30,
    width: '90%',
    height: '40%',
    borderRadius: 30,
    // SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 20,
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    borderRadius: 10,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    height: '40%',
    borderRadius: 30,
    justifyContent: 'center',
    width: '80%',
    margin: 40,
    // SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonContainer: {
    backgroundColor: '#39A7FF',

  },
  title1: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 5,
    letterSpacing: 1,
    fontFamily: 'sans-serif', 
    color: 'black',
  },
  title2: {
    fontSize: 20,
    margin: 5,
    letterSpacing: 1,
    fontFamily: 'sans-serif', 
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 1,
    margin: 10,
    fontFamily: 'sans-serif',
    color: 'rgba(0,0,0,0.5)',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',  
  },
});

export default styles;
