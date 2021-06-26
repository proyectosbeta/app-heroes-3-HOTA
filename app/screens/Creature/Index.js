import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './Styles';
// import ImageCastle from 'helpers/ImageCastle';
import { LocalizationContext } from 'services/localization/LocalizationContext';

const CreatureScreen = ({ navigation }) => {
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);

  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        { translations['creature']['title'] }
      </Text>
      <View style={{ padding:10 }}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Castle', {
            creature: 'castle',
          })}>
          <Image
            source={require('assets/images/Castle/Castle.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Castle', {
            creature: 'tower',
          })}>
          <Image
            source={require('assets/images/Castle/Tower.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatureScreen;