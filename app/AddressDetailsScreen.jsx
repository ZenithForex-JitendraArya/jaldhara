import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { heightScale, widthScale } from '../theme/_scale';
import { colors } from '../theme/_colors';
import { useRoute } from '@react-navigation/native';

export default function AddressDetailsScreen() {
    const route = useRoute();
    const { location, address } = route.params;
    const [selectedLabel, setSelectedLabel] = useState('Other');
    const [receiverName, setReceiverName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+91 ');
    const [houseNo, setHouseNo] = useState('');
    const [building, setBuilding] = useState('');
    const [landmark, setLandmark] = useState('');
    const navigation = useNavigation();

    // console.log(address)
    const addressArray = address.split(',');
    const titleAddress = addressArray[0]; // First part (e.g., name or area)
    const subtitleAddress = addressArray.slice(1).join(',').trim(); // Remaining part as a string

    const handleSave = () => {
        // handle save logic here
        console.log('address save');
        navigation.navigate('CartScreen'); 


    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add Address Details</Text>
            </View>

            {/* Selected Location */}
            <View style={styles.selectedLocation}>
                <View>
                    <Text style={styles.locationTitle}>{titleAddress}</Text>
                    <Text style={styles.locationSubtitle}>
                        {subtitleAddress}
                    </Text>
                </View>
                {/* <TouchableOpacity style={styles.changeButton}>
                    <Text style={styles.changeButtonText}>Change</Text>
                </TouchableOpacity> */}
            </View>

            {/* Address Inputs */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Add Address</Text>

                <TextInput
                    style={styles.input}
                    placeholder="House No. & Floor *"
                    value={houseNo}
                    onChangeText={setHouseNo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Building & Block No. (Optional)"
                    value={building}
                    onChangeText={setBuilding}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Landmark & Area Name (Optional)"
                    value={landmark}
                    onChangeText={setLandmark}
                />
            </View>

            {/* Label Buttons */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Add Address Label</Text>
                <View style={styles.labelRow}>
                    {['Home', 'Work', 'Other'].map((label) => (
                        <TouchableOpacity
                            key={label}
                            style={[
                                styles.labelButton,
                                selectedLabel === label && styles.selectedLabelButton,
                            ]}
                            onPress={() => setSelectedLabel(label)}
                        >
                            <Text
                                style={[
                                    styles.labelText,
                                    selectedLabel === label && styles.selectedLabelText,
                                ]}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Receiver Details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Receiver Details</Text>
                <View style={styles.inputWithIcon}>
                    <TextInput
                        style={[styles.input]}
                        placeholder="Receiver's Name"
                        value={receiverName}
                        onChangeText={setReceiverName}
                        maxLength={14}
                    />
                    <Ionicons name="person" size={20} color="#999" style={styles.icon} />
                </View>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            {/* Save Button */}
            <TouchableOpacity
                style={[
                    styles.saveButton,
                    (!houseNo || !receiverName || (phoneNumber==='+91 '))  && styles.disabledButton,
                ]}
                onPress={handleSave}
                disabled={!houseNo}
            >
                <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        paddingHorizontal: widthScale(5),
        paddingTop: heightScale(2),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    selectedLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 16,
    },
    locationTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    locationSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    changeButton: {
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    changeButtonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        width:widthScale(90),
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.white,
        marginRight: 10,
    },
    selectedLabelButton: {
        backgroundColor: colors.black,
        borderColor: colors.black,
    },
    labelText: {
        fontSize: 14,
        color: colors.black,
    },
    selectedLabelText: {
        color: '#fff',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: -35,
        // margin:'auto',
    },
    saveButton: {
        backgroundColor: colors.black,
        padding: 15,
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
});
