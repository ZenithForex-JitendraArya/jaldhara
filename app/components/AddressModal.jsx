import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/_colors";
import { Modalize } from "react-native-modalize";
import { View } from "react-native";
import { useState } from "react";

export default function AddressModal({ addreses, addressModalRef, navigation, setSelectedAddressIndex }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleAddNewAddress = () => {
        addressModalRef.current?.close();
        // Delay navigation slightly to ensure modal closes first
        setTimeout(() => {
            navigation.navigate('MapScreen');
        }, 300);
    };

    const continueHandler = () => {
        if (selectedIndex !== null) {
            addressModalRef.current?.close();
            // Confirm and Continue logic
            setSelectedAddressIndex(selectedIndex)
        }
    }

    return (
        <Modalize ref={addressModalRef} modalHeight={400}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Select Address</Text>

                {addreses.map((addr, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => setSelectedIndex(idx)}
                        style={[
                            styles.addressBox,
                            selectedIndex === idx && styles.selectedAddress,
                        ]}
                    >
                        <Text>{addr.name + ' ' +  addr.mobile }</Text>
                        {/* <Text>{addr.mobile}</Text> */}
                        <Text style={styles.addressDate}>{addr.address}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={styles.button}
                    // onPress={() => {
                    //     addressModalRef.current?.close();
                    //     // Navigate or open map
                    // }}
                    onPress={handleAddNewAddress}
                >
                    <Text style={styles.buttonText}>+ Add New Address</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedIndex === null && styles.disabledButton
                    ]}
                    onPress={continueHandler}
                    disabled={selectedIndex === null}
                >
                    <Text style={styles.buttonText}>Confirm And Continue</Text>
                </TouchableOpacity>
            </View>
        </Modalize>
    );
}

const styles = StyleSheet.create({
    addressBox: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
    },
    selectedAddress: {
        borderColor: colors.orange,
        backgroundColor: '#fff5eb',
    },
    addressDate: {
        fontSize: 12,
        color: '#888',
    },
    button: {
        marginTop: 20,
        backgroundColor: colors.orange,
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
