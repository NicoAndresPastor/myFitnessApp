import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 0.5,
        padding: 20,
        margin:5,
        width: "100%",
        borderRadius: 5,
        backgroundColor: "white",
        //shadow
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
        color: "#222",
        marginLeft: 20,
        
    },
    arrowContainer: {
        marginLeft: "auto",
    },
});

export default styles;