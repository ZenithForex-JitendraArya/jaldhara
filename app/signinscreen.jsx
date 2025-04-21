import React, { useState, useRef } from 'react';
import { heightScale, widthScale } from '../theme/_scale'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    ImageBackground
} from 'react-native';
import assets from './assets';
import { router } from 'expo-router';
import { color } from '../theme/_colors';


export default function SignInScreen() {
    const welcomeBgLogo = assets.welcomePageLogo;
    const welcomeBg = assets.welcomeBg;
    const [phone, setPhone] = useState('');
    const [syncContacts, setSyncContacts] = useState(true);
    const phoneInputRef = useRef(null); // Create a ref for the TextInput

    const continueHandler = () => {
        router.push({
            pathname: '/OTPScreen',
            params: {
                phoneNumber: phone,
                syncContacts: syncContacts
            }
        })
    }

    return (
        <ImageBackground source={welcomeBg} style={styles.container} resizeMode="cover">
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('/welcome')}>
                        <Text style={styles.backArrow}>{'←'}</Text>
                    </TouchableOpacity>
                    <Image source={welcomeBgLogo} style={styles.logo} />
                </View>

                <Text style={styles.title}>Log in</Text>
                <Text style={styles.subtitle}>
                    Please confirm your country code and enter your phone number.
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        ref={phoneInputRef} // Assign the ref
                        style={styles.input}
                        placeholder="Enter Mobile Number"
                        keyboardType="number-pad"
                        value={phone}
                        maxLength={10}
                        onChangeText={setPhone}
                        autoFocus={false} // Prevents autofocus here but ensures user can click to focus
                    />
                </View>

                <View style={styles.syncRow}>
                    <Text style={styles.syncLabel}>Sync Contacts</Text>
                    <Switch
                        value={syncContacts}
                        onValueChange={setSyncContacts}
                        trackColor={{ false: '#ccc', true: '#3f90ff' }}
                        thumbColor={syncContacts ? '#fff' : '#888'}
                    />
                </View>

                <TouchableOpacity style={styles.button}
                    onPress={continueHandler}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#6fd0ff',
        paddingHorizontal: widthScale(5),
        paddingTop: heightScale(3),
        // height:heightScale(100),
        // width:widthScale(100)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'center'
    },
    logo: {
        width: widthScale(15),
        height: heightScale(10),
    },
    backArrow: {
        fontSize: 28,
        color: '#000',
        paddingTop: heightScale(3),
        width: widthScale(15)
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        color: '#222',
    },
    subtitle: {
        fontSize: 14,
        color: '#222',
        marginBottom: 30,
        fontStyle: 'intel',
        fontWeight: '400'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        marginBottom: 30,
    },
    countryCode: {
        fontSize: 18,
        color: '#000',
        marginRight: 10,
    },
    input: {
        fontSize: 18,
        flex: 1,
        paddingVertical: 8,
        color: '#000',
    },
    syncRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    syncLabel: {
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#3f90ff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
