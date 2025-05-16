import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/_colors';
import assets from './assets';
import { heightScale, widthScale } from '../theme/_scale';
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import AddressModal from './components/AddressModal';
// import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import WaterDropLoader from './components/WaterDropLoader';



export default function CartScreen() {
    const [quantity, setQuantity] = useState(1);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1)
    const [isLoading, setIsLoading] = useState(false);

    // const [showAddModal, setShowAddModal] = useState(false);

    const welcomeBgLogo = assets.welcomePageLogo;
    const addressModalRef = useRef(null);
    const navigation = useNavigation();

    const openAddressModal = () => {
        // setShowAddModal(true)
        addressModalRef.current?.open();
    };



    const products = [{
        name: 'Jal Dharaa 20 ltr. Water',
        price: 20,
        image: require('../assets/images/bisleri20ltrcan.jpg'), // replace with your image
        date: '20Apr, 01:20 pm',
    }, {
        name: 'Jal Dharaa 20 ltr. Water',
        price: 20,
        image: require('../assets/images/bisleri20ltrcan.jpg'), // replace with your image
        date: '20Apr, 01:20 pm',
    }]

    const addreses = [{
        name: 'Jal Dharaa 20 ltr. Water',
        mobile: '123456789',
        address: 'rytbgnhm',
        isSelected: false,
    }, {
        name: 'Jal Dharaa 20 ltr. Water',
        mobile: '123456789',
        address: 'rytbgnhm',
        isSelected: false,
    }]

    const selectedAdd = {
        name: 'Jal Dharaa 20 ltr. Water',
        mobile: '123456789',
        address: 'rytbgnhm',
    }
    const changeBtn = () => {

    }
    const placeOrderHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // You can navigate or show success message here
        }, 2000);
    };


    return (
        <>
            <View style={styles.container}>
                {isLoading ?
                    <View style={styles.loaderOverlay}>
                        <WaterDropLoader />
                    </View>
                    :
                    <>
                        <View style={styles.logoHeader}>
                            <View style={{ width: widthScale(80), alignItems: 'center' }}>
                                <Icon name="cart-outline" style={[styles.circelBorder]} size={24} color={colors.orange} />
                            </View>
                            <Image source={welcomeBgLogo} style={styles.logo} />
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={styles.title}>You have {quantity} item{quantity > 1 ? 's' : ''} in the cart</Text>
                            {/* <View > */}
                            {products.map((product, index) =>
                                <View key={index} style={styles.card}>
                                    <Image source={product.image} style={styles.productImage} />
                                    <View style={styles.productInfo}>
                                        <Text style={styles.productName}>{product.name}</Text>
                                        <Text style={styles.productDate}>{product.date}</Text>
                                    </View>
                                    <Text style={styles.price}>Rs. {product.price.toFixed(2)}</Text>
                                    <View style={styles.quantityContainer}>
                                        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                                            <Text style={styles.qtyButton}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.qtyText}>{quantity}</Text>
                                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                                            <Text style={styles.qtyButton}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}


                            <View style={styles.card}>
                                {addreses.length > 0 ?
                                    (selectedAdd ?
                                        <View style={{ alignItems: 'left' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Delivering to</Text>
                                                <TouchableOpacity style={styles.inlineChangeBtn} onPress={openAddressModal}>
                                                    <Text style={styles.inlineChangeText}>Change</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text>{selectedAdd?.name}</Text>
                                            <Text>{selectedAdd?.mobile}</Text>
                                            <Text style={styles.addressDate}>{selectedAdd?.address}</Text>
                                        </View>
                                        :
                                        <TouchableOpacity style={styles.addressButton} onPress={openAddressModal}>
                                            <Text style={styles.addressText}>Select Address</Text>
                                        </TouchableOpacity>
                                    )
                                    :
                                    <TouchableOpacity style={styles.addressButton}>
                                        <Text style={styles.addressText}>Add New Address</Text>
                                    </TouchableOpacity>
                                }
                                <View style={styles.table}>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Subtotal</Text>
                                        <Text style={styles.value}>₹{80}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Tax and Fees</Text>
                                        <Text style={styles.value}>₹0.00</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Delivery</Text>
                                        <Text style={styles.value}>₹0.00</Text>
                                    </View>

                                    <View style={styles.totalSection}>
                                        <View style={styles.row}>
                                            <Text style={styles.totalLabel}>Total</Text>
                                            <Text style={styles.totalValue}>₹{80}</Text>
                                        </View>
                                    </View>
                                </View>


                                <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrderHandler}>
                                    <Text style={styles.placeOrderText}>Place Order</Text>
                                </TouchableOpacity>
                            </View>

                            {/* </View> */}
                        </ScrollView>
                    </>
                }
            </View >

            {/* {showAddModal && */}
            <AddressModal addreses={addreses} setSelectedAddressIndex={setSelectedAddressIndex} addressModalRef={addressModalRef} navigation={navigation} />

            {/* } */}
        </>
    );
}

const SummaryRow = ({ label, value }) => (
    <View style={styles.summaryRow}>
        <Text>{label}</Text>
        <Text>Rs. {value.toFixed(2)}</Text>
    </View>
);

// ScrollView 

const styles = StyleSheet.create({
    loaderOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: colors.bgColor,
        zIndex: 1000,
    },

    inlineChangeBtn: {
        marginLeft: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
    },
    inlineChangeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#007bff',
    },
    addressBox: {
        padding: 12,
        // borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
    },
    addressDate: {
        fontSize: 12,
        color: '#888',
    },
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 16,
        paddingBottom: heightScale(9),
    },
    circelBorder: {
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',
        display: 'flex',
        // flex: 1,
        justifyContent: 'center',
        padding: '.5rem'
    },
    logoHeader: {
        // height: heightScale(10)
        display: 'flex',
        flexDirection: 'row',

    },
    logo: {
        width: widthScale(13),
        height: heightScale(8),
    },
    title: {
        textAlign: 'center',
        marginVertical: 12,
        fontWeight: '600',
        fontSize: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        elevation: 4,
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        marginBottom: 12,
    },
    productInfo: {
        alignItems: 'center',
        marginBottom: 8,
    },
    productName: {
        fontWeight: '600',
        fontSize: 14,
    },
    productDate: {
        fontSize: 12,
        color: '#888',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#F95C3C',
        marginVertical: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
    },
    qtyButton: {
        fontSize: 20,
        color: colors.white,
        backgroundColor: colors.black,
        width: 30,
        height: 30,
        textAlign: 'center',
        borderRadius: 15,
        lineHeight: 30,
    },
    qtyText: {
        marginHorizontal: 12,
        fontWeight: 'bold',
        fontSize: 16,
    },
    addressButton: {
        backgroundColor: '#57C6F2',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        // marginBottom: 16,
        width: widthScale(45),
    },
    addressText: {
        // color: colors.white,
        fontWeight: 'bold',
    },
    placeOrderText: {
        fontWeight: 'bold',
    },
    summary: {
        marginBottom: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    placeOrderButton: {
        backgroundColor: '#57C6F2',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        width: widthScale(40)
    },
    table: {
        // marginVertical: 16,
        marginTop: 16,
        paddingHorizontal: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Important
        marginBottom: 12,
    },
    label: {
        flexShrink: 1, // Label can shrink if needed
        fontSize: 16,
        color: "#333",
        marginRight: 8, // Add little gap
    },
    value: {
        fontSize: 16,
        color: "#333",
        textAlign: "left",
        minWidth: widthScale(15),
    },
    totalSection: {
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        paddingTop: 12,
        marginTop: 8,
    },
    totalLabel: {
        flexShrink: 1,
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginRight: 8,
    },
    totalValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        // textAlign: "right",
        textAlign: "left",
        minWidth: widthScale(15),
    },
});
