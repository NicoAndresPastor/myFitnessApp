import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39A7FF",
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        right: 40,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        height: 200,        
    },
    container2: {
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        height: '45%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 100,
    },   
    buttonText: {
        color: '#39A7FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    macronutrientsContainer:{
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        width: 200,
        borderRadius: 10,
        flex: 1,
        margin: 10,
        backgroundColor: "#fff",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 10,
    },
    title:{
        fontSize: 35,
        fontWeight: "bold",
        color: "Black",
        textAlign: "center",
        marginTop: 20
    },
    subtitle3: {
        fontSize: 23,
        color: "Black",
        textAlign: "center",
        marginTop: 20
    },
    subtitle:{
        fontSize: 28,
        color: "#333",
        textAlign: "center",
      
    },
    subtitle2: {
        fontSize: 20,
        color: "Black",
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
        
    },
    container1: {
        alignItems: "center",
        marginTop: 60,
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white",
        width: '80%',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 10,}

});

export default styles;