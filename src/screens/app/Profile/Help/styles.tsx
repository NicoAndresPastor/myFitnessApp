import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    principalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#37A0FF",
        padding: 20,
    },
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginVertical: 5,
        textAlign: 'center',
    },
    textEmail: {
        fontSize: 23,
        color: "#007AFF",
        marginVertical: 5,
        textAlign: 'center',
    },
     containerbuttonBack: {
    position: "absolute",
    top: 5,
    left: 10,
  },
    container1: {
        alignItems: "center",
        marginTop: 40,
        justifyContent: "flex-start",
        flex: 1,
        backgroundColor: "white",
        width: '100%',
        borderRadius: 10,
        padding: 40,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },

    container2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: '100%',
        height: '55%',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        position: 'absolute',
        width: 400,
        height: 400,
        resizeMode: 'contain',
        top: -20
    }
});

export default styles;
