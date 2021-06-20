import React, { useContext, useEffect, useState } from 'react';
import { DOMAIN } from 'constants/domain';
import { TouchableOpacity, FlatList, View, Text, Image } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';
// import DetailsScreen from './Details';
import axios from 'axios';

const CreatureScreen = ({ navigation }) => {
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios.get(`${DOMAIN}creature`)
      .then((response) => {
        const creatures = response.data;
        setData(creatures);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);

  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        { translations['creature']['title'] }
      </Text>
      {/* <Text style={styles.description}>
        { translations['creature']['description'] }
      </Text> */}
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
                  <Text>Name: { item.name }</Text>
                  <Text>Level: { item.level }</Text>
                  <Text>Attack: { item.attack }</Text>
                  <Text>Defense: { item.defense }</Text>
                  <Text>Damage: { item.damage }</Text>
                  <Text>Health: { item.health }</Text>
                  <Text>Speed: { item.speed }</Text>
                  <Text>Size: { item.size }</Text>
                  <Text>Shots: { item.shots }</Text>
                  <Text>AI value: { item.aiValue }</Text>
                  <Text>Special abilities: { item.specialAbilities }</Text>
                </View>
              </View>
            )}
          />
          {/* <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate(DetailsScreen, {data: item})
                  }}
                >
                    <Text>
                    +
                    </Text>
                </TouchableOpacity>
              )}/> */}
        </View>
    </View>
  );
};

export default CreatureScreen;