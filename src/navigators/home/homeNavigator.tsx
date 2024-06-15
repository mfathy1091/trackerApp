import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/Home';
import RecordsListScreen from './screens/RecordsList';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName="RecordsList">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="RecordsList" component={RecordsListScreen} />
            </Drawer.Navigator>
        </>
    );
};

export default HomeNavigator;
