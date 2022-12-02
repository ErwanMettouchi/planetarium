import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titre}></Text>
            <Text style={styles.text}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000"
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    titre: {
        color: '#fff',
        fontSize: 40
    }
})