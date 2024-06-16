import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import theme from 'theme';

interface BottomSheetProps {
    visible: boolean;
    onVisibilityChange: Dispatch<SetStateAction<boolean>>;
    headerTitle?: string;
    children: any;
}

const BottomSheet = ({ visible = false, onVisibilityChange, headerTitle, children }: BottomSheetProps) => {
    return (
        <Modal animationType="fade" transparent statusBarTranslucent style={styles.modal} visible={visible}>
            <Pressable style={styles.outsideModal} onPress={() => onVisibilityChange(!visible)}>
                <View style={styles.outsideModal}>
                    <View style={styles.bottomSheet}>
                        {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
                        {children}
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    outsideModal: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: theme.color.black + '80',
    },
    bottomSheet: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: theme.color.white,
        paddingBottom: 16,
        paddingRight: 16,
    },
    headerTitle: {
        padding: 16,
        ...theme.text.cardTextBold,
        color: theme.color.black,
    },
});

export default BottomSheet;
