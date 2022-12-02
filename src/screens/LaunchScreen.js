import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgImage from '../../assets/images/launch_bg.jpg';

export default function LaunchScreen({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={bgImage}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titre}>Planetarium</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigation')}>
                    <Text style={styles.buttonText}>Commencer</Text>
                </TouchableOpacity>
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
        fontSize: 70,
        fontFamily: "Meow",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    button: {
        backgroundColor: "#69B0F6",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Nunito",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 1.22,
        shadowRadius: 2.22,
        elevation: 3
    }
})