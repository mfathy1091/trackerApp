import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import CheckCircle from '@icons/check-circle.svg';

import theme from 'theme';

const SelectTile = ({ item, isSelected = false, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.5} style={styles.tileContainer}>
            <Text style={isSelected ? styles.OptionTextSelected : styles.OptionText}>{item.text}</Text>
            {isSelected && <CheckCircle testID={item.text + '.checkCircle'} />}
        </TouchableOpacity>
    );
};

export default SelectTile;

const styles = StyleSheet.create({
    tileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    OptionText: {
        ...theme.text.accountTitle,
        color: theme.color.black,
    },
    OptionTextSelected: {
        ...theme.text.cardText,
        color: theme.color.green,
    },
});
