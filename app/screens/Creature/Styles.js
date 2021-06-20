import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 23,
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
    },
    card: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    image: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    info: {
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }
});

export default Styles;