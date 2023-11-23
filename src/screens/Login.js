import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },

    botaoLogin: {
        marginLeft: 33,
        marginRight: 33,
        padding: 15,
        color: '#fff',
        backgroundColor: '#3F79F9',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 50,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    }
});