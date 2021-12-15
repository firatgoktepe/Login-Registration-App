import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Home(props){
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}