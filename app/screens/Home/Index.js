import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';
import ImageHome from '../../helpers/ImageHome';

const Index = () => {
  global.currentScreenIndex = 'Home';
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        { translations['home']['title'] }
      </Text>
      <ImageHome/>
      <Text style={styles.description}>
        { translations['home']['description'] }
      </Text>
    </View>
  );
};
export default Index;