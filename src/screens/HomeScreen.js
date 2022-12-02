import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTerre from '../../assets/images/home-terre.jpg'
import Constants from 'expo-constants';

const width = Dimensions.get('window').width

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titre}>Planetarium</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.paragraphe}>Une application pour mieux connaître les planètes du Système Solaire auquel appartient notre planète bleue la Terre.</Text>
                <Image source={HomeTerre} style={styles.image} />
                <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')} style={styles.button} >
                    <Text style={styles.buttonText}>Voir la vidéo de présentation</Text>
                </TouchableOpacity>
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
        fontFamily: "openSansLight",
        textAlign: "justify",
        fontSize: 20,
        marginBottom: 15
    },
    scrollView: {
        paddingHorizontal: 15
    },
    image: {
        width: width - 30,
        height: width * 608 / 1821
    },
    button: {
        backgroundColor: "#F2C094",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonText: {
        color: "#C4EEF2",
        fontSize: 20,
        textAlign: "center"
    }
})