import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title} </Text>
    </View>

);

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#4886ea',
        alignItems: 'center', //Alinhar verticalmente
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff',
    }
})

export default Header;