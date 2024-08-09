import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    principalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39A7FF",
        
    },
    container1 : {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#39A7FF",
        width: "100%",
        alignItems: "center",
    },
    container2 : {
        backgroundColor: "#f3f3f3",
        width: "100%",
        height: "50%",
    },
    container3 : {
        position: "absolute",
        top: '45%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50, 
        width: "80%",
       
    },
    FirstButton : {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    LastButton : {
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    text : {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    profileImage: {
    width: 200, 
    height: 200,
    borderRadius: 120, 
    borderWidth: 1, 
    borderColor: 'black',
    marginBottom: 10,
    resizeMode: 'cover',  
  },


});

export default styles;