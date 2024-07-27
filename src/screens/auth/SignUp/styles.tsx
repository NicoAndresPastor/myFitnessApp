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
    padding: 10,
    width: '90%',
    height: '20%',
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
container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 20,
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
title1: {
    fontSize: 31,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'sans-serif',
    color: '#000',
    margin: 10,
},
input: {
    width: 250,
    margin: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'rgba(0,0,0,0.05)',
},
inputerror : {
    width: 300,
    borderColor: 'red',
    borderWidth: 1,
},
title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#39A7FF',
},
image: {
    width: 200,
    height: 200,
},
subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: 50,
    fontFamily: 'sans-serif',
    color: 'rgba(0,0,0,0.5)',
},
buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},
signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#39A7FF',
    justifyContent: 'center',
    margin: 10,
},
});

export default styles