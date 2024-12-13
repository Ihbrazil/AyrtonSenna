import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    imgCapa: {
        borderRadius: 5,
        marginBottom: 10,
        width: "100%",
        height: 200,
        resizeMode: "stretch",
    },

    paragrafo: {
        color: "#757575",
        fontWeight: "bold",
        marginBottom: 20,
    },

    imgCard: {
        width: 100,
        height: 100,
    },

    card: {
        flexDirection: "row",
        marginBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#d5d5d5",
        borderBottomColor: "#d5d5d5",
    },

    textosCard: {
        flex: 1,
        padding: 10,
    },

    tituloCard: {
        fontSize: 18,
        fontWeight: "bold",
    },
})

export default estilos;