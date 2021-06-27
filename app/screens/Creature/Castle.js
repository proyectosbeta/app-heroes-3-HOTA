import React, { useContext, useEffect, useState } from 'react';
import { DOMAIN } from 'constants/domain';
import { FlatList, View, Text, Image } from 'react-native';
import styles from './CastleStyles';
import { LocalizationContext } from 'services/localization/LocalizationContext';
import axios from 'axios';

const changeTitleNavigation = (navigation, creature) => {
  navigation.setOptions({
    title: creature
  });
}

const Castle = ({ navigation, route }) => {
  const { creature } = route.params;
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // changeTitleNavigation(navigation, creature);

  useEffect(async () => {
    axios.get(`${DOMAIN}creature/${creature}`)
      .then((response) => {
        const creatures = response.data;
        setData(creatures);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);

  return (
    <View style={ styles.container }>
      {isLoading && (
        <Text style={styles.title}>
          Loading...
        </Text>
      )}
      {!isLoading && (
          <>
            <Text style={styles.title}>
              { translations['creature']['title'] } { creature }
            </Text>
            <View style={{padding:10}}>
              <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <View style={ styles.card }>
                      <View style={ styles.imgContainer }>
                        <Image
                          source={{uri: item.imageUrl }}
                          style={ styles.image }
                        />
                      </View>
                      <View style={ styles.info }>
                        <Text style={ styles.titleText } >Name: { item.name }</Text>
                        <Text style={ styles.titleText } >Level: { item.level }</Text>
                        <Text style={ styles.titleText } >Attack: { item.attack }</Text>
                        <Text style={ styles.titleText } >Defense: { item.defense }</Text>
                        <Text style={ styles.titleText } >Damage: { item.damage }</Text>
                        <Text style={ styles.titleText } >Health: { item.health }</Text>
                        <Text style={ styles.titleText } >Speed: { item.speed }</Text>
                        <Text style={ styles.titleText } >Size: { item.size }</Text>
                        <Text style={ styles.titleText } >Shots: { item.shots }</Text>
                        <Text style={ styles.titleText } >AI value: { item.aiValue }</Text>
                        <Text style={ styles.titleText } >Special abilities: { item.specialAbilities }</Text>
                      </View>
                    </View>
                  )}
                />
            </View>
        </>
      )}
    </View>
  );
};

export default Castle;