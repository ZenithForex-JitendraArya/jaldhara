import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from './assets';
import ProductGridScreen from './components/productGrid';


export default function HomeScreen() {
    const stories = Array(6).fill({ name: 'Story' });
    const banner1 = assets.banner1;


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
                {/* Header */}
                <View style={styles.header}>
                    <TextInput placeholder="Search" style={styles.searchBox} />
                    <Icon name="notifications-outline" size={24} color="#fff" />
                </View>

                {/* Greeting */}
                <Text style={styles.greeting}>Good Morning</Text>
                <Text style={styles.subGreeting}>Rise And Shine! It's Your Water</Text>

                {/* Stories */}
                <FlatList
                    data={stories}
                    horizontal
                    contentContainerStyle={styles.storyList}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={() => (
                        <View style={styles.storyItem}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }}
                                style={styles.avatar}
                            />
                            <Text style={styles.storyText}>Story</Text>
                        </View>
                    )}
                />
                <View style={styles.mid}>
                    <Text style={styles.sectionTitle}>Best Seller</Text>
                    <Image
                        source={banner1}
                        style={styles.bestSellerCard}
                    />
                </View>
                {/* <View style={styles.mid}> */}
                <Text style={styles.sectionTitle}>Recommend</Text>
                <ProductGridScreen />
                {/* </View> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71D5F3',
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: '#fff',
        flex: 1,
        marginRight: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
    },
    subGreeting: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 15,
    },
    storyList: {
        marginVertical: 10,
    },
    storyItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    storyText: {
        color: '#000',
        marginTop: 4,
        fontSize: 12,
    },
    mid: {
        margin: 'auto'
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        color: '#000',
    },
    bestSellerCard: {
        backgroundColor: '#fff',
        borderRadius: 14,
        marginTop: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        elevation: 4,
    },
    bestSellerLeft: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    rating: {
        backgroundColor: '#f93',
        color: '#fff',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        borderRadius: 10,
        marginBottom: 8,
        fontSize: 12,
    },
    bestSellerText: {
        fontWeight: '600',
        marginBottom: 10,
        fontSize: 14,
    },
    price: {
        color: '#E44D26',
        fontWeight: 'bold',
    },
    bestSellerImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    recommendWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    recommendCard: {
        backgroundColor: '#fff',
        width: '48%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
    },
    recommendImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    recommendPrice: {
        fontWeight: 'bold',
    },
});
