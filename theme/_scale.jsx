import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const { height: heightScreen, width: widthScreen } = Dimensions.get('screen');

export const size = { height, width };
export const sizeScreen = { height: heightScreen, width: widthScreen };

// Guideline sizes for moderate scaling
const guidelineBaseWidth = width >= 768 ? 768 : 375;
const guidelineBaseHeight =
    Platform.OS === 'ios'
        ? height >= 1024
            ? 1024
            : 812
        : height <= 550
            ? 667
            : 812;

/**
 * Scales based on percentage of screen width
 * @param {number} percentage - (e.g., 10 for 10%)
 * @returns {number}
 */
const widthScale = (percentage) => Math.ceil((percentage / 100) * width);

/**
 * Scales based on percentage of screen height
 * @param {number} percentage - (e.g., 10 for 10%)
 * @returns {number}
 */
const heightScale = (percentage) => Math.ceil((percentage / 100) * height);

/**
 * Applies moderate scaling based on design size
 * @param {number} sizeValue
 * @param {number} [factor=0.5]
 * @returns {number}
 */
const moderateScale = (sizeValue, factor = 0.5) =>
    Math.ceil(sizeValue + (widthScale((sizeValue / guidelineBaseWidth) * 100) - sizeValue) * factor);

/**
 * Applies moderate vertical scaling
 * @param {number} sizeValue
 * @param {number} [factor=0.5]
 * @returns {number}
 */
const moderateVerticalScale = (sizeValue, factor = 0.5) =>
    Math.ceil(sizeValue + (heightScale((sizeValue / guidelineBaseHeight) * 100) - sizeValue) * factor);

/**
 * Returns true if the device is likely an iPad
 * @returns {boolean}
 */
const isIpad = () => width >= 768;

export {
    widthScale,
    heightScale,
    moderateScale,
    moderateVerticalScale,
    isIpad,
};
