import React, { Dispatch, MutableRefObject, useState } from 'react';
import { ColorValue, KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import IconHide from '@icons/hide.svg';
import IconShow from '@icons/show.svg';

import theme from 'theme';

interface Props {
    value: string;
    inputRef?: MutableRefObject<any>;
    title?: string;
    titleColor?: ColorValue;
    type?: 'singleline' | 'multiline';
    maxLength?: number;
    editable?: boolean;
    errorMessage?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    placeholderTextColor?: ColorValue;
    keyboardType?: KeyboardTypeOptions;
    onChangeText: Dispatch<any>;
    onFocus?: () => void;
    titleTextColor?: ColorValue;
    testID?: string;
}

const CustomTextInput: React.FC<Props> = ({
    inputRef,
    value,
    title,
    titleColor = theme.color.green,
    errorMessage,
    editable = true,
    type = 'singleline',
    placeholder = '',
    secureTextEntry = false,
    placeholderTextColor = theme.color.grey,
    maxLength = 11,
    keyboardType = 'default',
    titleTextColor,
    onChangeText,
    onFocus,
    testID,
}) => {
    const [securePass, setSecurePass] = useState(secureTextEntry);

    return (
        <View>
            {title && title.length && (
                <Text
                    style={[
                        styles.title,
                        {
                            color: editable ? titleColor : theme.color.grey,
                        },
                        titleTextColor !== undefined ? { color: titleTextColor } : null,
                    ]}>
                    {title}
                </Text>
            )}
            <View>
                <TextInput
                    testID={testID}
                    ref={inputRef}
                    style={[
                        {
                            ...styles.textInput,
                            borderColor: editable ? theme.color.strokeButton : theme.color.strokeButton,
                            color: editable ? theme.color.black : theme.color.grey,
                            paddingRight: secureTextEntry ? 35 : 15,
                            height: type === 'multiline' ? 150 : 48,
                        },
                        type === 'multiline' && { paddingVertical: 0 },
                    ]}
                    onChangeText={onChangeText}
                    value={value}
                    editable={editable}
                    maxLength={type === 'multiline' ? 500 : maxLength}
                    multiline={type === 'multiline'}
                    autoComplete="off"
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={onFocus}
                    secureTextEntry={securePass}
                    keyboardType={keyboardType}
                    autoCorrect={false}
                    selectionColor={theme.color.green}
                    autoCapitalize="none"
                />

                {secureTextEntry && (
                    <TouchableOpacity
                        style={{
                            ...styles.securePassword,
                            top: securePass ? 15 : 14,
                        }}
                        activeOpacity={!editable ? 1 : 0.2}
                        onPress={() => {
                            editable && setSecurePass(!securePass);
                        }}>
                        {securePass ? (
                            <IconShow width={20} height={20} fill={editable ? theme.icon.active : theme.icon.default} />
                        ) : (
                            <IconHide width={20} height={20} fill={editable ? theme.icon.active : theme.icon.default} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
            {type === 'multiline' && (
                <View style={{ marginTop: 7 }}>
                    <Text style={styles.letterCount}>{value.length}/500</Text>
                </View>
            )}
            <View style={styles.errorView}>
                {errorMessage && errorMessage.length && <Text style={styles.error}>{errorMessage}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        ...theme.text.accountTitle,
        borderRadius: 5,
        backgroundColor: theme.color.white,
        paddingHorizontal: 15,
        letterSpacing: 1.8,
        fontWeight: '500',
        borderWidth: 1,
        textAlignVertical: 'top',
    },
    title: {
        ...theme.text.smallTitle,
        textAlign: 'left',
        fontWeight: '400',
        marginBottom: 8,
        color: theme.color.grey,
    },
    errorView: {
        minHeight: 20,
    },
    error: {
        ...theme.text.smallTitle,
        color: theme.color.red,
        textAlign: 'center',
    },
    letterCount: {
        ...theme.text.smallTitle,
        color: theme.color.grey,
    },
    securePassword: {
        position: 'absolute',
        right: 10,
        top: 20,
    },
});

export default CustomTextInput;
