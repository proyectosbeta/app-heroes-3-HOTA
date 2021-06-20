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
    imgContainer: {
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1,
        margin: 50,
    },
    info: {
        borderRadius: 10,
        padding: 10,
        marginTop: -35,
        marginLeft: 20,
        marginBottom: 10,
    }
});

export default Styles;