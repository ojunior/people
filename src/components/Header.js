import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>People </Text>
    </View>

);

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#4886ea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff',
    }
})

export default Header;