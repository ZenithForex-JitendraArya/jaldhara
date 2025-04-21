import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { heightScale, widthScale } from '../../theme/_scale';

export const ProductCard = ({ item }) => {
    return (
        <View style={styles.card}>
            {item.discount && (
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{item.discount} Off</Text>
                </View>
            )}
            <Image source={item.image} style={styles.image} />
            <View style={styles.prodDesc}>
                <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
                <Text style={styles.size}>{item.size}</Text>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.priceBlock}>
                    <Text style={styles.price}>₹{item.price}</Text>
                    {item.originalPrice ? (
                        <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
                    ) : null}
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    prodDesc: {
        margin: 'auto',
        textAlign: 'left'
    },
    card: {
        // width: screenWidth / 2 - 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 5,
        padding: 10,
        elevation: 3,
        position: 'relative',
    },
    discountBadge: {
        position: 'absolute',
        top: 6,
        left: 6,
        backgroundColor: '#6B46C1',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        zIndex: 1,
    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceBlock: {
        flexDirection: 'column',
        width: '45%'
    },
    image: {
        width: widthScale(30),
        height: heightScale(20),
        borderRadius: widthScale(2),
        marginBottom: heightScale(1),
        marginInline: 'auto',
    },
    name: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 2,
    },
    size: {
        fontSize: 12,
        color: '#777',
        marginBottom: 4,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 6,
    },
    originalPrice: {
        fontSize: 12,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    addButton: {
        borderColor: '#e91e63',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 6,
        alignItems: 'center',
        width: '45%'

    },
    addText: {
        color: '#e91e63',
        fontWeight: 'bold',
    },
});