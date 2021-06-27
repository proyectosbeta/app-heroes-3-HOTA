import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';
import ImageHome from 'helpers/ImageHome';

const HomeScreen = (props) => {
  global.currentScreenIndex = 'Home';
  const { navigation } = props;
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
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => navigation.navigate('Creature')}>
            <Image
              source={require('assets/images/Creatures_ui_icon.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          onPress={() => navigation.navigate('Spell')}>
          <Image
              source={require('assets/images/Spells_ui_icon.png')}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;