import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';

const Creature = () => {
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        { translations['creature']['title'] }
      </Text>
      <Text style={styles.description}>
        { translations['creature']['description'] }
      </Text>
    </View>
  );
};
export default Creature;