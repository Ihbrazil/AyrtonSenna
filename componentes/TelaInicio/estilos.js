import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    imgCapa: {
        borderWidth: 3,
        borderColor: "#202020",
        borderRadius: 125,
        marginBottom: 50,
        width: 250,
        height: 250,
    },

    containerTexto: {
        borderbottom: 20,
        backgroundColor: "rgba(0,0,0,0.9)",
        borderRadius: 20,
        Width: 340,
        padding: 20,
    },

    titulo: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign : "center",
        marginBottom: 10,
    },

    paragrafo: {
        color: "#a6a6a6",
        fontSize: 16,
        textAlign: "center",
    },
})

export default estilos;