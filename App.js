import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppNavContainer />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
