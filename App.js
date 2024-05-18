import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppNavigation from './Navigation/appNavigation';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
          <AppNavigation/>
        </SafeAreaView>
    );
};

export default App;

