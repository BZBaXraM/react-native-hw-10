import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from "react-native-web";
import {StyledButton, StyledTextInput} from "./SystemDesgin";

const SingUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <StyledTextInput placeholder={
                "Email"
            } onChangeText={setUsername} value={username} secureTextEntry={false}/>
            <StyledTextInput placeholder={
                "Password"
            } onChangeText={setPassword} value={password} secureTextEntry={true}/>

            <StyledTextInput placeholder={
                "Confirm Password"
            } onChangeText={setPassword} value={password} secureTextEntry={true}/>
            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}/>
                <Text style={
                    {
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 23.44,
                    }
                }>I would like to receive your newsletter and
                    other promotional information.</Text>
            </View>

            <StyledButton color={"#5DB075"} title={"Sing Up"} onPress={handleLogin}></StyledButton>
            <Text>Forgot your password?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
        resizeMode: "cover",
    },
    input: {
        width: 343,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 29.05,
        marginBottom: 20,
    },
    button: {
        width: 343,
        height: 51,
        borderRadius: 100,
        padding: 16,
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DB075',
        marginTop: 20,
    },
    forget: {
        color: "#5DB075",
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 21,
    },
    checkbox: {
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderColor: "#5DB075",
        borderWidth: 2,
    },
});

export default SingUpPage;