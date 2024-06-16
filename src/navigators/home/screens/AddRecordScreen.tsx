import CustomTextInput from '@components/CustomTextInput';
import { useGetAccounts, useGetCategories } from 'queries/expenseQuery';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import SingleSelect from '../components/SingleSelect';

const AddRecordScreen: React.FC = () => {
    const { control } = useForm<FormData>({
        mode: 'all',
        defaultValues: {
            category: '',
            account: '',
            date: '',
            amount: '',
        },
    });

    const categoriesQuery = useGetCategories();
    const accountsQuery = useGetAccounts();

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={'date'}
                render={({ field: { onChange, value } }) => (
                    <CustomTextInput title={'Date'} value={value} onChangeText={onChange} />
                )}
            />
            <Controller
                control={control}
                name={'amount'}
                render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                        title={'Amount'}
                        value={value}
                        onChangeText={onChange}
                        keyboardType="decimal-pad"
                    />
                )}
            />
            <Controller
                control={control}
                name="category"
                render={({ field: { onChange, value } }) => (
                    <SingleSelect
                        title={'Category'}
                        selectedKey={value}
                        options={categoriesQuery?.data?.data}
                        fields={{ key: 'slug', text: 'name' }}
                        onChangeSelection={onChange}
                    />
                )}
            />
            <Controller
                control={control}
                name="account"
                render={({ field: { onChange, value } }) => (
                    <SingleSelect
                        title={'Account'}
                        selectedKey={value}
                        options={accountsQuery?.data?.data}
                        fields={{ key: 'slug', text: 'name' }}
                        onChangeSelection={onChange}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
});

export default AddRecordScreen;
