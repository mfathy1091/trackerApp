import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AddRecordScreen from './screens/AddRecordScreen';
import HomeScreen from './screens/Home';
import RecordsListScreen from './screens/RecordsList';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName="AddRecord">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="RecordsList" component={RecordsListScreen} />
                <Drawer.Screen name="AddRecord" component={AddRecordScreen} />
            </Drawer.Navigator>
        </>
    );
};

export default HomeNavigator;
