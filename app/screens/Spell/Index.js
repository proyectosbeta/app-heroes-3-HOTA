import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';

const SpellScreen = ({ navigation }) => {
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);

  return (
    <View style={ styles.container }>
      <View style={{ padding:10 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Magic', {
              magic: 'fire',
            })}>
            <Image
              source={require('assets/images/spell/Fire_Magic.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Magic', {
              magic: 'water',
            })}>
            <Image
              source={require('assets/images/spell/Water_Magic.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Magic', {
              magic: 'air',
            })}>
            <Image
              source={require('assets/images/spell/Air_Magic.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Magic', {
              magic: 'earth',
            })}>
            <Image
              source={require('assets/images/spell/Earth_Magic.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SpellScreen;