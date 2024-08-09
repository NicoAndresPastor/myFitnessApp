import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39A7FF",
    },
    container1: {
        alignItems: "center",
        marginTop: 80,
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
        elevation: 10,

    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#222",
        textAlign: "center",
        marginTop: 20
    },
    subtitle2: {
        fontSize: 10,
        color: "#222",
        textAlign: "center",
        marginTop: 20
    },
    picker:{
        alignItems: "center",
        width: 120,
        height: 50,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: 'blue',
        margin: 10,

    },
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    subtitle: {
        fontSize: 20,
        color: "#aaa",
        textAlign: "center",
        marginTop: 20
    },
       buttonTargetStyleSelected: {
        backgroundColor: "#39A7FF",
        borderWidth: 0,
        margin: 5,
        height: 50,
        width: 150,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container2:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: '80%',
        height: '35%',
        borderRadius: 10,
        marginBottom: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 10,
    },
    buttonTargetStyle: {
        backgroundColor: "#f0f0f0", 
        borderWidth: 0,
        margin: 5,
        height: 50,
        width: 150,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonTargetText: {
        fontSize: 20,
        color: '#8f8f8f',
    },
    buttonTargetTextSelected: {
        fontSize: 20,
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "white",
    },
    buttonText:{
        color: '#39A7FF',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;