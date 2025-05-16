// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { TouchableOpacity } from 'react-native';
// import { useNavigation } from 'expo-router';
// import { heightScale } from '../theme/_scale';

// export default function MapScreen() {
//     const [location, setLocation] = useState(null);
//     const [region, setRegion] = useState(null);
//     const [address, setAddress] = useState('');
//     const navigation = useNavigation();

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 console.log('Permission to access location was denied');
//                 return;
//             }

//             let loc = await Location.getCurrentPositionAsync({});
//             setLocation(loc);

//             setRegion({
//                 latitude: loc.coords.latitude,
//                 longitude: loc.coords.longitude,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//             });
//             fetchAddress(loc.coords.latitude, loc.coords.longitude);
//         })();
//     }, [region]);



//     const handleMapPress = (e) => {
//         const { latitude, longitude } = e.nativeEvent.coordinate;

//         const newRegion = {
//             latitude,
//             longitude,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//         };

//         setRegion(newRegion);
//         setLocation({ coords: { latitude, longitude } });
//         fetchAddress(latitude, longitude);
//     };

//     const fetchAddress = async (latitude, longitude) => {
//         try {
//             const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
//             if (geocode.length > 0) {
//                 const place = geocode[0];
//                 // const formatted = `${place.name || ''}, ${place.street || ''}, ${place.city || ''}, ${place.region || ''}`;
//                 const formatted = ` ${place.street  || ''} ${place.subregion || ''}, ${place.city || ''}, ${place.postalCode || ''}`;

//                 setAddress(formatted);
//             }
//         } catch (error) {
//             console.log('Error in reverse geocoding:', error);
//         }
//     };

//     const handleConfirm = () => {
//         navigation.navigate('AddressDetailsScreen', { location,address });
//     };

//     // if (!region) {
//     //     return (
//     //         <View style={styles.loadingContainer}>
//     //             <ActivityIndicator size="large" color="#0000ff" />
//     //         </View>
//     //     );
//     // }

//     return (
//         <>
//             {!region ?
//                 <View style={styles.loadingContainer}>
//                     <ActivityIndicator size="large" color="#0000ff" />
//                 </View> :
//                 <View style={styles.container}>
//                     <MapView
//                         style={styles.map}
//                         initialRegion={region}
//                         showsUserLocation={true}
//                         onPress={handleMapPress}
//                     >
//                         <Marker coordinate={region} title="Your Location" />
//                     </MapView>
//                     <View style={styles.footer}>
//                         <Text style={styles.addressText}>
//                             {address ? address : 'Fetching address...'}
//                         </Text>
//                         <TouchableOpacity
//                             style={styles.button} onPress={handleConfirm}>
//                             <Text style={styles.buttonText}>Confirm Location</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             }
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     map: {
//         flex: 1,
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         backgroundColor: '#007AFF',
//         padding: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         right: 20,
//         borderRadius: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
//     footer: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         right: 20,
//         alignItems: 'center',
//         height:heightScale(15)
//     }, addressText: {
//         marginBottom: 10,
//         backgroundColor: '#fff',
//         padding: 10,
//         borderRadius: 8,
//         textAlign: 'center',
//         color: '#333',
//     },
// });
