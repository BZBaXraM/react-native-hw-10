import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import StyledButton, {StyledTextInput} from "./SystemDesgin";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View>
            <Text>Login</Text>
            <StyledTextInput
                placeholder="Email"
                onChangeText={setUsername}
                value={username}
                secureTextEntry/>
            <StyledTextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <StyledButton color={"#5DB075"} title={"Login"} onPress={handleLogin}></StyledButton>
            </TouchableOpacity>
            <Text>Forgot your password?</Text>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingTop: 50,
//         resizeMode: "cover",
//     },
//     input: {
//         width: 343,
//         height: 50,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         paddingLeft: 8,
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: 500,
//         lineHeight: 29.05,
//         marginBottom: 20,
//     },
//     button: {
//         width: 343,
//         height: 51,
//         borderRadius: 100,
//         padding: 16,
//         gap: 12,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#5DB075',
//         marginTop: 20,
//     },
//     forget: {
//         color: "#5DB075",
//     }
// });

export default LoginPage;