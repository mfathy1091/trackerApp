import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import SingleSelect from '../components/SingleSelect';

const AddRecordScreen: React.FC = () => {
    const options = [
        { name: 'Food', option: 'food' },
        { name: 'Transportation', option: 'transportation' },
    ];

    const { control } = useForm<FormData>({
        mode: 'all',
        defaultValues: {
            category: '',
        },
    });

    return (
        <View>
            <Controller
                control={control}
                name="category"
                render={({ field: { onChange, value } }) => (
                    <SingleSelect
                        title={'Category'}
                        selectedKey={value}
                        options={options}
                        fields={{ key: 'option', text: 'name' }}
                        onChangeSelection={onChange}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default AddRecordScreen;
