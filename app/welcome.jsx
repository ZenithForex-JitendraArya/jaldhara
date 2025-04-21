import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';

import assets from './assets';
import { colors } from '../theme/_colors';
import { heightScale, widthScale, } from '../theme/_scale';
import { router } from 'expo-router';

const Welcome = () => {
    const welcomeBg = assets.welcomeBg;
    const welcomeBgLogo = assets.welcomePageLogo;

    return (
        <ImageBackground source={welcomeBg} style={styles.container} resizeMode="cover">
            <View style={styles.contentContainer}>
                <Image source={welcomeBgLogo} style={styles.logo} />

                <View style={styles.midContainer}>
                    <Text style={styles.subtitle}>Explore the app</Text>
                    <Text style={styles.description}>Now your finances are in one place and always under control</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => router.replace('/signinscreen')}
                    >
                        <Text style={styles.primaryButtonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryButton}
                    // onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.secondaryButtonText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.paginationDot} /> */}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: widthScale(5),
        // gap: widthScale(5)
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: widthScale(10), // 10% of screen width
    },
    logo: {
        width: widthScale(40), // 20% of screen width
        height: heightScale(40), // 20% of screen width (assuming square)
        resizeMode: 'contain',
        marginLeft: widthScale(9),
        // marginBottom: heightScale(2), // 5% of screen height
    },
    midContainer: {
        marginTop: heightScale(5),
        marginBottom:heightScale(10),
        alignItems:'center',
    },

    subtitle: {
        color: colors.textBlackColor,
        fontFamily: 'Poppins',
        fontSize: widthScale(10), // 6% of screen width
        fontWeight: '700',
        marginBottom: widthScale(1), // 1% of screen height
    },
    description: {
        color: colors.black,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: widthScale(5), // 4% of screen width
        textAlign: 'center',
        // marginBottom: widthScale(5), // 10% of screen height
        marginTop: widthScale(3),
        lineHeight: widthScale(5), // 5% of screen height
        paddingInline:widthScale(5)
    },
    buttonsContainer: {
        alignItems: 'center',
        // marginTop: widthScale(5), // 5% of screen height
        // marginBottom: widthScale(10)
        width:widthScale(80),
    },
    primaryButton: {
        backgroundColor: '#377DFF',
        width: '80%', // 80% of parent width
        paddingVertical: widthScale(3), // 3% of screen height
        borderRadius: widthScale(2), // 2% of screen width
        alignItems: 'center',
        marginBottom: widthScale(2), // 2% of screen height
    },
    primaryButtonText: {
        color: colors.white,
        fontSize: widthScale(4), // 4% of screen width
        fontWeight: '600',
    },
    secondaryButton: {
        borderColor: colors.white,
        borderWidth: 1,
        width: '80%', // 80% of parent width
        paddingVertical: widthScale(3), // 3% of screen height
        borderRadius: widthScale(2), // 2% of screen width
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    secondaryButtonText: {
        color: colors.white,
        fontSize: widthScale(4), // 4% of screen width
        fontWeight: '600',
    },
    paginationDot: {
        width: widthScale(50),
        height: widthScale(1),
        backgroundColor: colors.white,
        borderRadius: widthScale(3),
        // marginBottom: widthScale(5),
        // position: 'absolute',
        // bottom: widthScale(3),

    },
});

export default Welcome;