import React, {useState} from 'react';
import { Image, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    const onLoginPress = () => {

    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={ {flex: 1, width: '100%'} }
                keyboardShouldPersistTaps='always'
            >
                <Image 
                
                    source={require('../../../assets/icon.png')}
                    style={styles.logo}
                
                />
                <TextInput
                
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor={'#aaa'}
                    value={password}
                    onChangeText={setPassword}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    secureTextEntry={true}

                />

                <TouchableOpacity

                    style={styles.button}
                    onPress={ () => onLoginPress() }>
                    <Text style={styles.buttonTitle}>Login</Text>    

                </TouchableOpacity>
                <View>
                    <Text style={styles.footerText}>Don't have an account?<Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View> 

            </KeyboardAwareScrollView>    
        </View>
    )

}