import { StyleSheet, View, Text } from "react-native";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
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
        color: 'green',
    },
});

export default Settings;