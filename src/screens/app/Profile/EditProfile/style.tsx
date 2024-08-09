import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39A7FF",
    width: '100%',
  },
  profileImage: {
    width: 200, 
    height: 200,
    borderRadius: 120, 
    borderWidth: 1, 
    borderColor: 'black',
    marginBottom: 10,
    resizeMode: 'cover',  
    marginTop: 20
  },
  text : {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20
  },
  containerGender: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 12,
    color: '#8f8f8f',
  },
  containerbuttonBack: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    padding: 10,
  },
  container2: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    top: "50%",
  },
  container3: {
    height: "60%",
    width: "100%",
    backgroundColor: "#f3f3f3",
  },
  FirstButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  LastButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  saveButton: {
    backgroundColor: "#39A7FF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    position: "absolute",
    bottom: 30,
    width: "30%",
   
  },
});

export default styles;
