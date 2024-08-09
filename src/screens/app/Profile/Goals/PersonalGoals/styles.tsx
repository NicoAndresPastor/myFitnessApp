import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39A7FF",
    },

       buttonTargetStyleSelected: {
        backgroundColor: "#39A7FF",
        borderWidth: 0,
        margin: 5,
        height: 100,
        width: 250,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        right: 40,
        backgroundColor: "white",
    },
    buttonTargetStyle: {
        backgroundColor: "#f0f0f0",  // Corrected color value
        borderWidth: 0,
        margin: 5,
        height: 100,
        width: 250,
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
    buttonText: {
        color: '#39A7FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTargetTextSelected: {
        fontSize: 20,
    },
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#39A7FF",
        margin: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#333",
        marginVertical: 5,
    },
    container1:{ 
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
    container2:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: '80%',
        height: '45%',
        borderRadius: 10,
        marginBottom: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,

    },
    image:{
        width: 250, 
        height: 250,
        resizeMode: 'contain',
    }
});

export default styles;
