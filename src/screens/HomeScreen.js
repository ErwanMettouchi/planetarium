import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTerre from '../../assets/images/home-terre.jpg'
import Constants from 'expo-constants';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titre}>Planetarium</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.paragraphe}>Une application pour mieux connaître les planètes du Système Solaire auquel appartient notre planète bleue la Terre.</Text>
                <Image source={HomeTerre} style={styles.image} />
                <Text style={styles.paragraphe}>Vous découvrirez également quelques bizarreries de l'espace comme des objets insolites envoyés par l'Humain.</Text>
                <Text style={styles.paragraphe}>Bon voyage...</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#0B2559"
    },
    titre: {
        color: "#fff",
        fontSize: 60,
        textAlign: "center",
        fontFamily: "Meow"
    },
    paragraphe: {
        color: "#C4EEF2",
        fontFamily: "openSansMedium",
        paddingHorizontal: 20,
        fontSize: 15
    }
})