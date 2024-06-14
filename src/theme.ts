import { StyleSheet } from 'react-native';

const color = {
    green: '#0CAE77',
    darkGreen: '#137651',
    red: '#F01C1C',
    failingRed: '#E45151',
    white: '#fdfdfd',
    strokeButton: '#ececec',
    grey: '#cbcbcb',
    darkGrey: '#676870',
    black: '#3c3c3b',
    earthyRed: '#C9897C',
    moderateBlue: '#5B8CB7',
};

const font = {
    quicksand: {
        regular: 'Quicksand-Regular',
        medium: 'Quicksand-Medium',
        semiBold: 'Quicksand-SemiBold',
        bold: 'Quicksand-Bold',
    },
};

const size = {
    TITLE: 30,
    XXL: 20,
    XL: 16,
    L: 15,
    M: 14,
    S: 12,
    XS: 10,
};

const icon = {
    active: '#15c585',
    white: '#fff',
    default: '#cbcbcb',
};

const text = StyleSheet.create({
    headerTitle: {
        fontSize: size.TITLE,
        fontFamily: font.quicksand.bold,
    },
    accountHeaderTitle: {
        fontSize: size.XXL,
        fontFamily: font.quicksand.medium,
        textAlign: 'center',
    },
    inputText: {
        fontSize: size.XL,
        fontFamily: font.quicksand.regular,
    },
    cardTextBold: {
        fontSize: size.L,
        fontFamily: font.quicksand.semiBold,
    },
    buttonText: {
        fontSize: size.L,
        fontFamily: font.quicksand.bold,
    },
    cardText: {
        fontSize: size.L,
        fontFamily: font.quicksand.medium,
    },
    underlineText: {
        fontSize: size.L,
        fontFamily: font.quicksand.regular,
        textDecorationLine: 'underline',
    },
    accountTitle: {
        fontSize: size.L,
        fontFamily: font.quicksand.regular,
    },
    paragraph: {
        fontSize: size.M,
        fontFamily: font.quicksand.medium,
    },
    paragraphBold: {
        fontSize: size.M,
        fontFamily: font.quicksand.bold,
    },
    smallTitle: {
        fontSize: size.S,
        fontFamily: font.quicksand.medium,
    },
    smallText: {
        fontSize: size.S,
        fontFamily: font.quicksand.regular,
    },
});

export default { color, text, size, font, icon };
