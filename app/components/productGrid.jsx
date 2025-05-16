import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ProductCard } from './productCard';
import { FlashList } from '@shopify/flash-list';
const data = [
    {
        name: '20Ltr Bisleri Can',
        size: '20 Ltr',
        price: 70,
        image: require('../../assets/images/bisleri20ltrcan.jpg'),
        discount: '5%',
        originalPrice: '',
    },
    {
        name: 'Filter Water Bottle',
        size: '20 ltr',
        price: 32,
        originalPrice: 40,
        discount: '2%',
        image: require('../../assets/images/20ltrcan.jpg'),

    },
    {
        name: 'Fresh White Eggs',
        size: '1 pack (30 pcs)',
        price: 203,
        originalPrice: 259,
        discount: '21%',
        // image: 'https://via.placeholder.com/100x100.png?text=Eggs',
    },
    {
        name: 'Chicken Puff',
        size: '1 Piece',
        price: 80,
        originalPrice: 154,
        discount: '48%',
        // image: 'https://via.placeholder.com/100x100.png?text=Puff',
    },
];

const numColumns = 1;
// const screenWidth = Dimensions.get('window').width;


export default function ProductGridScreen() {
    return (
        // <FlatList
        //     data={data}
        //     renderItem={({ item }) => <ProductCard item={item} />}
        //     keyExtractor={(_, index) => index.toString()}
        //     numColumns={numColumns}
        //     contentContainerStyle={styles.container}
        // />
        <FlashList
            data={data}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(_, index) => index.toString()}
            numColumns={numColumns}
            contentContainerStyle={styles.container}
            estimatedItemSize={100}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});