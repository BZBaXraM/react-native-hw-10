import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


interface MessageProps {
    message: string;
    timestamp: string;

}
const Message = ({message, timestamp} : MessageProps) => {
    return (
        <View>
            <View >
                <Text>{message}</Text>
                <Text>{timestamp}</Text>
            </View>
            <Text>
                Hello, I'm writing to you today to let you know that I'm not interested in using your yacht, and I don't
                want this thing smelling like fish.
            </Text>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#f4f4f4',
//         borderRadius: 10,
//         padding: 10,
//         margin: 10,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     headerText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     timestamp: {
//         fontSize: 12,
//         color: '#888',
//     },
//     content: {
//         marginTop: 5,
//     },
// });

export default Message;
