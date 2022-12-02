import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgImage from '../../assets/images/launch_bg.jpg';

export default function LaunchScreen() {
    return (
        <ImageBackground style={styles.container} source={bgImage}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titre}>Planetarium</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    titre: {
        color: '#fff',
        fontSize: 40
    }
})