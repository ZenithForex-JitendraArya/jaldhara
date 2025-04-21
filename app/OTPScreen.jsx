import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { widthScale, heightScale } from '../theme/_scale';
import assets from './assets';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router'; // Changed import
import { colors } from '../theme/_colors';

// import { heightScale, widthScale } from '../theme/_scale'




const OTPScreen = ({ route }) => {
    const welcomeBg = assets.welcomeBg;
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(20);
    const [isOtpWrong, setIsOtpWrong] = useState(false);
    const [msg, setMsg] = useState('')
    // Use useLocalSearchParams instead of route.params
    const params = useLocalSearchParams();
    const phoneNumber = params.phoneNumber || '+91 0000000000';
    const syncContacts = params.syncContacts === 'true'; // Convert string to boolean


    // Timer countdown
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleKeyPress = (key) => {
        if (key === 'backspace') {
            const firstEmptyIndex = otp.findIndex(num => num === '');
            const indexToClear = firstEmptyIndex === -1 ? 5 : firstEmptyIndex - 1;
            if (indexToClear >= 0) {
                const newOtp = [...otp];
                newOtp[indexToClear] = '';
                setOtp(newOtp);
            }
        } else if (key !== '*' && key !== '#') {
            const firstEmptyIndex = otp.findIndex(num => num === '');
            if (firstEmptyIndex !== -1) {
                const newOtp = [...otp];
                newOtp[firstEmptyIndex] = key;
                setOtp(newOtp);
                if (firstEmptyIndex === 5) verifyOTP(newOtp.join(''));
            }
        }
    };

    const verifyOTP = (code) => {
        if (code === '123456') {
            console.log('Verifying OTP:', code);
            setTimeout(() => {
                router.replace('/homeScreen');
            }, 2000); // 2000ms = 2 seconds
        } else {
            setIsOtpWrong(true);
            setMsg('Wrong OTP, Please try again.')
            setTimer(0);
        }
    };

    const resendOTP = () => {
        if (timer === 0) {
            setTimer(20);
            setOtp(['', '', '', '', '', '']);
            setIsOtpWrong(false);
            setMsg('')
            console.log('Resending OTP to:', phoneNumber);
        }
    };

    return (
        <ImageBackground source={welcomeBg} style={styles.container} resizeMode="cover">
            <View style={styles.content}>
                <Text style={styles.header}>Enter code</Text>
                <Text style={styles.subHeader}>
                    We've sent an SMS with an activation code to your phone {phoneNumber}
                </Text>

                {/* OTP Boxes */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <View key={index} style={[styles.otpBox, digit && styles.otpBoxFilled]}>
                            <Text style={styles.otpText}>{digit}</Text>
                        </View>
                    ))}
                </View>
                {/* wrong otp msg  */}

                <Text style={styles.redText}> {isOtpWrong && msg} </Text>


                {/* Resend OTP */}
                <TouchableOpacity onPress={resendOTP} disabled={timer > 0}>
                    <Text style={[styles.resendText, timer > 0 && styles.resendDisabled]}>
                        {timer > 0 ? `Send code again ${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}` : 'Resent OTP'}
                    </Text>
                </TouchableOpacity>

                {/* Keypad */}
                <View style={styles.keypad}>
                    {/* Row 1 */}
                    <View style={styles.keypadRow}>
                        <KeyButton number="1" letters=" " onPress={handleKeyPress} />
                        <KeyButton number="2" letters="ABC" onPress={handleKeyPress} />
                        <KeyButton number="3" letters="DEF" onPress={handleKeyPress} />
                    </View>
                    {/* Row 2 */}
                    <View style={styles.keypadRow}>
                        <KeyButton number="4" letters="GHI" onPress={handleKeyPress} />
                        <KeyButton number="5" letters="JKL" onPress={handleKeyPress} />
                        <KeyButton number="6" letters="MNO" onPress={handleKeyPress} />
                    </View>
                    {/* Row 3 */}
                    <View style={styles.keypadRow}>
                        <KeyButton number="7" letters="PQRS" onPress={handleKeyPress} />
                        <KeyButton number="8" letters="TUV" onPress={handleKeyPress} />
                        <KeyButton number="9" letters="WXYZ" onPress={handleKeyPress} />
                    </View>
                    {/* Row 4 */}
                    <View style={styles.keypadRow}>
                        <KeyButton number="*" onPress={handleKeyPress} />
                        <KeyButton number="0" onPress={handleKeyPress} />
                        <KeyButton number="backspace" onPress={handleKeyPress} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const KeyButton = ({ number, letters, onPress }) => (
    <TouchableOpacity style={styles.key} onPress={() => onPress(number)}>
        <Text style={styles.keyNumber}>{number === 'backspace' ? '⌫' : number}</Text>
        {letters && <Text style={styles.keyLetters}>{letters}</Text>}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: widthScale(100),
        height: heightScale(100),
    },
    content: {
        flex: 1,
        paddingHorizontal: widthScale(1),
        paddingTop: heightScale(10),
        // width: widthScale(80),
    },
    header: {
        fontFamily: 'Poppins',
        fontSize: widthScale(10),
        fontWeight: '900',
        color: colors.black,
        textAlign: 'center',
        marginBottom: heightScale(2),
    },
    subHeader: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: widthScale(4.5),
        color: colors.textBlackColor,
        textAlign: 'center',
        marginBottom: heightScale(8),
        paddingHorizontal: widthScale(10),
    },
    redText: {
        color: colors.red,
        textAlign: 'center',
        paddingBottom: heightScale(2),

    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: heightScale(4),
    },
    otpBox: {
        width: widthScale(12),
        height: widthScale(12),
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: widthScale(2),
        marginHorizontal: widthScale(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpBoxFilled: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    otpText: {
        fontSize: widthScale(6),
        color: colors.textBlackColor,
        fontWeight: 'bold',
    },
    resendText: {
        color: colors.black,
        fontSize: widthScale(4),
        textAlign: 'center',
        marginBottom: heightScale(2),
        borderBlockColor: colors.black,
        borderBottomWidth: widthScale(0.5),
        width: widthScale(50),
        marginInline: 'auto',
        paddingBottom: widthScale(0.5)
    },
    resendDisabled: {
        // color: '#aaa',
        color: colors.black,

    },
    keypad: {
        marginTop: 'auto',
        marginBottom: heightScale(1),
    },
    keypadRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    key: {
        width: widthScale(20),
        height: widthScale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyNumber: {
        fontSize: widthScale(7),
        color: colors.textBlackColor,
        fontWeight: 'bold',
    },
    keyLetters: {
        fontSize: widthScale(3),
        color: colors.textBlackColor,
        marginTop: heightScale(1),
    },
});

export default OTPScreen;