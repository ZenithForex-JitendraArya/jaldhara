import { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/_colors';
import assets from './assets';

export default function SplashScreen() {
    const router = useRouter();
    const landingPage = assets.landingPage;

    useEffect(() => {
        console.log('Navigating after splash...');
        const timer = setTimeout(() => {
            console.log('Navigating to /welcome...');
            router.replace('/welcome');
            // router.push('/welcome');
        }, 2000);

        // Cleanup on unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <ImageBackground source={landingPage} style={styles.container}>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
