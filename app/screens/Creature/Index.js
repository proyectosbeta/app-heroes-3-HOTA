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
                <View style={ styles.image }>
                  <Image
                    source={{uri: item.imageUrl }}
                    style={{width: 120, height: 250 }}
                  />
                </View>
                <View style={ styles.info }>
                  <Text>Name: { item.name }</Text>
                  <Text>Level: { item.level }</Text>
                  <Text>Attack: { item.attack }</Text>
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