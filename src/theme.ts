import { StyleSheet } from 'react-native';

const color = {
    green: '#0CAE77',
    darkGreen: '#137651',
    red: '#F01C1C',
    failingRed: '#E45151',
    white: '#fdfdfd',
    offWhite: '#C5E5F8',
    strokeButton: '#ececec',
    lightGrey: '#cbcbcb',
    grey: '#808080',
    darkGrey: '#676870',
    black: '#2A2A2A',
    earthyRed: '#C9897C',
    moderateBlue: '#5B8CB7',
    darkBlue: '#0D47A1',
};

const font = {
    quicksand: {
        regular: 'Quicksand-Regular',
        medium: 'Quicksand-Medium',
        semiBold: 'Quicksand-SemiBold',
        bold: 'Quicksand-Bold',
    },
};

const icon = {
    active: '#15c585',
    white: '#fff',
    default: '#cbcbcb',
};

const text = StyleSheet.create({
    headerTitle: {
        fontSize: 30,
        fontFamily: font.quicksand.bold,
    },
    accountHeaderTitle: {
        fontSize: 20,
        fontFamily: font.quicksand.medium,
        textAlign: 'center',
    },
    inputText: {
        fontSize: 16,
        fontFamily: font.quicksand.regular,
    },
    cardTextBold: {
        fontSize: 15,
        fontFamily: font.quicksand.semiBold,
    },
    buttonText: {
        fontSize: 15,
        fontFamily: font.quicksand.bold,
    },
    cardText: {
        fontSize: 15,
        fontFamily: font.quicksand.medium,
    },
    underlineText: {
        fontSize: 15,
        fontFamily: font.quicksand.regular,
        textDecorationLine: 'underline',
    },
    accountTitle: {
        fontSize: 15,
        fontFamily: font.quicksand.regular,
    },
    paragraph: {
        fontSize: 14,
        fontFamily: font.quicksand.medium,
    },
    paragraphBold: {
        fontSize: 14,
        fontFamily: font.quicksand.bold,
    },
    smallTitle: {
        fontSize: 12,
        fontFamily: font.quicksand.medium,
    },
    smallText: {
        fontSize: 12,
        fontFamily: font.quicksand.regular,
    },
});

export default { color, text, font, icon };
