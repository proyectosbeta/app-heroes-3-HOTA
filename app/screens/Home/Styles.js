import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 23,
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        padding: 30,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    image: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
});

export default Styles;