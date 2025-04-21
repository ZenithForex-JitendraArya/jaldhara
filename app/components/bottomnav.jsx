// components/BottomNav.js
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { heightScale, widthScale } from '../../theme/_scale';

const BottomNav = () => {
    const router = useRouter();

    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/homeScreen')}>
                <Icon name="home-outline" size={24} />
                {/* <Text>Home</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/buy-now')}>
                <Icon name="cart-outline" size={24} />
                {/* <Text>Buy Now</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/wallet')}>
                <Icon name="wallet-outline" size={24} />
                {/* <Text>Wallet</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
                <Icon name="person-outline" size={24} />
                {/* <Text>Profile</Text> */}
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: widthScale(100),
        height: heightScale(7),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default BottomNav;
