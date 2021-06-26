import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
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
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
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
              creature: 'rampart',
            })}>
            <Image
              source={require('assets/images/Castle/Rampart.png')}
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
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'inferno',
            })}>
            <Image
              source={require('assets/images/Castle/Inferno.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'necropolis',
            })}>
            <Image
              source={require('assets/images/Castle/Necropolis.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'dungeon',
            })}>
            <Image
              source={require('assets/images/Castle/Dungeon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'stronghold',
            })}>
            <Image
              source={require('assets/images/Castle/Stronghold.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'fortress',
            })}>
            <Image
              source={require('assets/images/Castle/Fortress.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'conflux',
            })}>
            <Image
              source={require('assets/images/Castle/Conflux.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Castle', {
              creature: 'cove',
            })}>
            <Image
              source={require('assets/images/Castle/Cove.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreatureScreen;