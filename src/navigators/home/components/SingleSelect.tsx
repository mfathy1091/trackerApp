import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import DownArrow from '@icons/down-arrow.svg';

import theme from 'theme';
import BottomSheet from './BottomSheet';
import SelectTile from './SelectTile';

interface Props {
    title: string;
    selectedKey: string | null;
    editable?: boolean;
    fields: {};
    onChangeSelection: (newSelection: string | null) => void;
    options: {}[]; // to make it dynamic; it can receive any list of objects, which then mapped into the proper key/text pairs using the fields prop
}

const SingleSelect: React.FC<Props> = ({ title, selectedKey, editable = true, onChangeSelection, options, fields }) => {
    const [bottomSheetVisible, setBottomSheetVisibility] = useState(false);
    const [buttonText, setButtonText] = useState('-');

    const mapOptions = () => {
        return options?.map(item => {
            const key = fields.key;
            const text = fields.text;
            return { key: item[key], text: item[text] };
        });
    };

    const mappedOptions = mapOptions();

    useEffect(() => {
        const selectedOption = mappedOptions?.find(option => option.key === selectedKey);
        setButtonText(selectedOption ? selectedOption.text : '-');
    }, [mappedOptions, selectedKey]);

    const changeSelectionHandler = (newSelectedOption: {}): void => {
        if (newSelectedOption.key === selectedKey) {
            onChangeSelection(null);
        } else {
            onChangeSelection(newSelectedOption.key);
        }
    };

    return (
        <>
            <View>
                {title && (
                    <Text
                        style={[
                            {
                                ...styles.title,
                                color: editable ? theme.color.green : theme.color.grey,
                            },
                        ]}>
                        {title}
                    </Text>
                )}
                <Pressable
                    style={styles.selectionContainer}
                    disabled={!editable}
                    onPress={() => setBottomSheetVisibility(true)}>
                    <Text
                        style={[
                            {
                                color: editable ? theme.color.black : theme.color.grey,
                            },
                        ]}>
                        {buttonText}
                    </Text>
                    <DownArrow
                        style={styles.downArrow}
                        fill={editable ? theme.color.green : theme.color.strokeButton}
                    />
                </Pressable>
            </View>
            <BottomSheet visible={bottomSheetVisible} onVisibilityChange={setBottomSheetVisibility} headerTitle={title}>
                {mappedOptions?.map((item, index) => (
                    <SelectTile
                        item={item}
                        key={index}
                        isSelected={selectedKey === item.key}
                        onPress={changeSelectionHandler}
                    />
                ))}
            </BottomSheet>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        ...theme.text.smallTitle,
        marginBottom: 8,
    },
    selectionContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.color.strokeButton,
        backgroundColor: theme.color.white,
        paddingHorizontal: 15,
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    downArrow: {
        position: 'absolute',
        right: 9,
    },
});

export default SingleSelect;
