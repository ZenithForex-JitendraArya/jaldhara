import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, Dimensions } from "react-native";

// Constants
const { width } = Dimensions.get("window");
const DROP_SIZE = 64;
const DROP_COUNT = 4;
const DROP_TIME = 1300;

export default function WaterDropLoader() {
    // Create refs for animated values
    const dropAnims = Array.from(
        { length: DROP_COUNT },
        () => useRef(new Animated.Value(-DROP_SIZE)).current
    );

    // Start animations on mount
    useEffect(() => {
        dropAnims.forEach((anim, index) => {
            const animateDrop = () => {
                anim.setValue(-DROP_SIZE);
                Animated.timing(anim, {
                    toValue: 300,
                    duration: DROP_TIME,
                    delay: (index * (DROP_TIME * 0.75)) / DROP_COUNT,
                    easing: Easing.in(Easing.quad),
                    useNativeDriver: false,
                }).start(() => animateDrop());
            };

            animateDrop();
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.circleWrapper}>
                {/* Water at the bottom */}
                <View style={styles.water} />

                {/* Animated drops */}
                {dropAnims.map((anim, index) => {
                    const scale = 1 - index * (1 / (DROP_COUNT + 1));
                    const size = DROP_SIZE * scale;

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.drop,
                                {
                                    width: size,
                                    height: size,
                                    top: anim,
                                    left: (300 - size) / 2, // Center horizontally in the 300px circle
                                },
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#DBF0F7",
        justifyContent: "center",
        alignItems: "center",
    },
    circleWrapper: {
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: "#E6E6E6",
        borderWidth: 10,
        borderColor: "rgba(255,255,255,0.6)",
        overflow: "hidden",
        position: "relative",
    },
    water: {
        position: "absolute",
        bottom: 0,
        left: "-5%",
        width: "110%",
        height: "20%",
        backgroundColor: "#80C9F6",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    drop: {
        position: "absolute",
        backgroundColor: "#80C9F6",
        borderRadius: 100,
        transform: [{ rotate: "45deg" }],
    },
});
