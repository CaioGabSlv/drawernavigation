import { StyleSheet, View, Text } from "react-native";

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default Notifications;