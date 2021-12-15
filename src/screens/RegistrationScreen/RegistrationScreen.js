import React, {useState} from 'react';
import { Image, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function RegistrationScreen({navigation}){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const onFooterLinkPress = () => {
        navigation.navigate('Login');
    }

    const onRegisterPress = () => {

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
                    placeholder='Full Name'
                    placeholderTextColor={'#aaa'}
                    value={fullName}
                    onChangeText={ (text) => setFullName(text) }
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'

                />
                <TextInput

                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor={'#aaa'}
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor={'#aaa'}
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    secureTextEntry={true}

                />

                <TextInput 
                
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor={'#aaa'}
                    value={confirmPassword}
                    onChangeText={ (text) => setConfirmPassword(text) }
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    secureTextEntry={true}

                />

                <TouchableOpacity

                    style={styles.button}
                    onPress={ () => onLoginPress() }>
                    <Text style={styles.buttonTitle}>Create an Account</Text>    

                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );

}