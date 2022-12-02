import * as React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio, Video } from 'expo-av';
const width = Dimensions.get('window').width


export default function VideoScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.intro}>Une présentation du Système Solaire</Text>
            <Text style={styles.intro}>Bon visionnage!!</Text>
            <Video source={require('../../assets/videos/le-systeme-solaire.mp4')} style={styles.video} useNativeControls resizeMode="contain" usePoster posterSource={require('../../assets/videos/poster.png')} posterStyle={styles.video} shouldPlay />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E4159"
    },
    intro: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "openSansLight"
    },
    video: {
        width: width,
        height: width * 720 / 1280
    }
})