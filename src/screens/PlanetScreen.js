import React from 'react';
import { Text, StyleSheet, SafeAreaView, Dimensions, FlatList, ImageBackground } from 'react-native';
import bg from '../../assets/images/black-sun.jpg';
import Constants from 'expo-constants';

const width = Dimensions.get('window').width;


export default function PlanetScreen({ navigation }) {
    return (
        <ImageBackground source={bg} style={styles.container}>
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})