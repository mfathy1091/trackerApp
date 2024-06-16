import React, { Dispatch } from 'react';
import { FlexAlignType, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';

import theme from 'theme';

export type ButtonColor = 'green' | 'red' | 'grey' | 'failingRed' | undefined;

interface Props {
    onPress: Dispatch<any> | (() => void);
    disabled?: boolean | null;
    align?: FlexAlignType;
    width?: 'extraLarge' | 'large' | 'medium' | 'mediumSmall' | 'small';
    type?: 'coloured' | 'transparent';
    color?: ButtonColor;
    font?: 'bold' | 'regular';
    icon?: React.ReactElement;
    title?: string;
    style?: any;
    textColor?: string;
    borderColor?: string;
    textStyle?: TextStyle;
    testID?: string;
}

const Button: React.FC<Props> = ({
    onPress,
    disabled,
    title,
    width = 'medium',
    color = 'green',
    type = 'coloured',
    font = 'regular',
    icon,
    style,
    align = 'center',
    textColor,
    borderColor,
    textStyle,
    testID,
}) => {
    const btnWidth = () => {
        switch (width) {
            case 'extraLarge':
                return { width: 320 };
            case 'large':
                return { width: 260 };
            case 'medium':
                return { width: 230 };
            case 'mediumSmall':
                return { width: 150 };
            case 'small':
                return { width: 120 };
        }
    };
    const btnColor = () => {
        switch (color) {
            case 'green':
                return {
                    backgroundColor: theme.color.green,

                    borderColor: theme.color.green,
                };
            case 'red':
                return {
                    backgroundColor: theme.color.red,
                    borderColor: theme.color.red,
                };
            case 'grey':
                return {
                    backgroundColor: theme.color.strokeButton,
                    borderColor: theme.color.strokeButton,
                };
            case 'failingRed':
                return {
                    backgroundColor: theme.color.failingRed,
                    borderColor: theme.color.failingRed,
                };
        }
    };
    const btnType = () => {
        switch (type) {
            case 'coloured':
                return {};
            case 'transparent':
                return {
                    backgroundColor: 'transparent',
                    color: btnColor().borderColor,
                };
        }
    };
    const btnFont = () => {
        switch (font) {
            case 'bold':
                return { fontFamily: theme.font.quicksand.semiBold };
            case 'regular':
                return { fontFamily: theme.font.quicksand.medium };
        }
    };
    return (
        <View style={[btnWidth(), { alignSelf: align, ...style }]}>
            <TouchableOpacity
                testID={testID}
                disabled={disabled ?? undefined}
                style={[
                    styles.button,
                    btnColor(),
                    btnType(),
                    disabled && styles.disabled,
                    borderColor ? { borderColor: borderColor } : null,
                ]}
                onPress={onPress}>
                {icon && <View>{icon}</View>}
                <Text
                    style={[
                        styles.buttonText,
                        {
                            color: type === 'transparent' ? btnColor().borderColor : theme.color.white,
                        },
                        textColor
                            ? {
                                  color: textColor,
                              }
                            : null,
                        textStyle ? textStyle : null,
                        color === 'grey' ? { color: theme.color.darkGrey } : null,
                        btnFont(),
                    ]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        minHeight: 49,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 2,
        marginTop: 13,
    },
    buttonText: {
        ...theme.text.buttonText,
        textAlign: 'center',
        lineHeight: 19,
    },
    disabled: {
        backgroundColor: theme.color.grey,
        borderColor: theme.color.grey,
    },
});

export default Button;
