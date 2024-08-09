import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 2,
        backgroundColor: 'white',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        color: "black",
    },
    title: {
        fontSize: 12,
        color: '#8f8f8f',
    },
    inputCorrect: {
        borderWidth: 0,
        borderColor: "white",
    },
    inputIncorrect: {
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "#ffe5e5",
        
    }
});

export default styles;
