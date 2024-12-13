import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },

    containerResultados: {
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
        width: 340,
        marginBottom: 50,
    }, 

    tituloResultados: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
        marginBottom: 10,
    },

    paragrafoResultados: {
        color: "#a6a6a6",
        textAlign: "center",
        marginBottom: 25,
    },

    imgTrofeu: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    numeroResultados: {
        color: "#eecb01",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginRight: 5,
    },

    textoResultados: {
        color: "#a6a6a6",
        fontSize: 16,
    },

    card: {
        backgroundColor: "rgba(0,0,0,0.6)",
        marginBottom: 20,
    },

    textoCard: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        padding: 15,
    },

    imgCard: {
        width: 300,
        height: 200,
    },
})

export default estilos;