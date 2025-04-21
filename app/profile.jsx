import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Switch,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightScale } from '../theme/_scale';
import { colors } from '../theme/_colors';

export default function ProfileScreen() {
    const [isSaved, setIsSaved] = React.useState(true);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }}
                style={styles.avatar}
            />
            <Text style={styles.profileName}>Profile Name</Text>

            <View style={styles.inputWrapper}>
                <Icon name="person-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Name" style={styles.input} />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="mail-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Email address" style={styles.input} />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="card-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Wallet" style={styles.input} />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="call-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Phone number" style={styles.input} keyboardType="phone-pad" />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="location-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Address" style={styles.input} />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="mail-open-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Zip code" style={styles.input} keyboardType="numeric" />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="business-outline" size={20} style={styles.icon} />
                <TextInput placeholder="City" style={styles.input} />
            </View>

            <View style={styles.switchWrapper}>
                <Switch value={isSaved} onValueChange={setIsSaved} />
                <Text style={styles.switchLabel}>Save this address</Text>
            </View>

            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bgColor,
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom:heightScale(8)
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 20,
    },
    profileName: {
        marginVertical: 10,
        backgroundColor: '#B6F3C2',
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 20,
        color: '#000',
        fontWeight: '500',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 12,
        width: '100%',
    },
    icon: {
        marginRight: 8,
        color: '#555',
    },
    input: {
        flex: 1,
        height: 45,
    },
    switchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    switchLabel: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: '500',
    },
    nextButton: {
        backgroundColor: '#3DC43D',
        marginTop: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
    },
    nextButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
