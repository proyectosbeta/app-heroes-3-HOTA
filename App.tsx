import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppContainer from 'app/navigation/AppNavigator';
import {LocalizationProvider} from 'services/localization/LocalizationContext';
import {ThemeProvider} from 'react-native-elements';
import theme from 'constants/theme';
import styles from './AppStyles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App: () => SectionProps = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider>
        <SafeAreaProvider style={styles.container}>
          <AppContainer />
        </SafeAreaProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
