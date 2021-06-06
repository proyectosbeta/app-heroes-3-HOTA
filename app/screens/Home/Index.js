import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from "react-native-elements";
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';

const Index = () => {
  global.currentScreenIndex = 'Home';
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        { translations['home']['title'] }
      </Text>
      <Text style={ styles.subtitle }>
        { translations['home']['subtitle'] }
      </Text>
    </View>
  );
};
export default Index;