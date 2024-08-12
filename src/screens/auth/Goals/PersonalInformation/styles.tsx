import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39A7FF",
    },
    containerbuttonBack: {
        position: 'absolute',
        top: 5,
        left: 10,
    },
    container1: {
        alignItems: "center",
        marginTop: 60,
        flex: 1,
        backgroundColor: "white",
        width: '80%',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        height:'35%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 10,
    },
    activityOptionText: {
        color: '#39A7FF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    container2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: '80%',
        height: '45%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 100,
    },
    buttonSelectionContainer: {
        shadowColor:'#fff', 
        borderColor: '#fff',
        width:'100%',
    },
    subtitle: {
        fontSize: 14,
        color: '#aaa',
        textAlign: "center",
    },
    text : {
        fontSize: 35,
        fontWeight: "bold",
        color: '#39A7FF',
        textAlign: "center",
        marginTop: 20
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 20
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        right: 40,
        backgroundColor: "white",
    },
    buttonText: {
        color: '#39A7FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    activityOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '100%',
    },
    activityOptionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10, 
        backgroundColor: '#f0f0f0',
        color: '#000',
        borderWidth: 2,
        borderColor: '#fff',
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedActivityOptionButton: {
        borderColor: '#fff',
        backgroundColor: '#39A7FF', 
    },
    selectedActivityOptionText: {
        color: '#fff',
    },
    activityOptionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },


});

export default styles;
