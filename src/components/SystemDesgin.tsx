import React from 'react';
import {Button, TextInput, StyleSheet} from 'react-native';

interface StyledButtonProps {
    title: string;
    onPress: () => void;
    color: string;

}

interface StyledTextInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry: boolean;

}

export const StyledButton = ({title, onPress, color}: StyledButtonProps) => {
    return (
        <Button color={color} title={title} onPress={onPress}></Button>
    );
};

export const StyledTextInput = ({placeholder, onChangeText, value, secureTextEntry}: StyledTextInputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: 343,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default StyledButton;