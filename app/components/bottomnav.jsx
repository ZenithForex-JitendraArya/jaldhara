// components/BottomNav.js
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { heightScale, widthScale } from '../../theme/_scale';
import { useCart } from '../context/CartContext';
import { colors } from '../../theme/_colors';

const BottomNav = () => {
    const router = useRouter();
    const { cartQuantity } = useCart();
    console.log(cartQuantity)
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/homeScreen')}>
                <Icon name="home-outline" size={24} />
                {/* <Text>Home</Text> */}
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/wallet')}>
                <Icon name="wallet-outline" size={24} />
                {/* <Text>Wallet</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
                <Icon name="person-outline" size={24} />
                {/* <Text>Profile</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/CartScreen')}>
                <View style={styles.iconWrapper}>
                <Icon name="cart-outline" size={24} />
                    {cartQuantity > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{cartQuantity}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    bottomNav: {
        position: 'fixed',
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
    // navItem: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    iconWrapper: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        right: -10,
        top: -6,
        backgroundColor: colors.bgColor,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
};

export default BottomNav;
