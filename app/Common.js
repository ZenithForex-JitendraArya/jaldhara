import * as Location from 'expo-location';
import { Alert, BackHandler, Linking, Platform } from 'react-native';




export const checkLocation = async () => {
    // Step 1: Check if location services are enabled
    const servicesEnabled = await Location.hasServicesEnabledAsync();
    console.log(servicesEnabled)
    if (!servicesEnabled) {
        Alert.alert(
            'Location Services Disabled',
            'Please enable location services (GPS).',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => {
                        BackHandler.exitApp(); // 👈 Exit app on cancel
                    },
                },
                {
                    text: 'Open Settings',
                    onPress: () => {
                        if (Platform.OS === 'android') {
                            Linking.openSettings();
                        } else {
                            Linking.openURL('App-Prefs:Privacy&path=LOCATION');
                        }
                    },
                },
            ]
        );
        return;
    }

    // Step 2: Request permission
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status)
    if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return;
    }

    // Step 3: Get current location (optional)
    const location = await Location.getCurrentPositionAsync({});
    console.log('Location:', location);
    return location;
}; 