import React, { useContext, useEffect, useState  } from 'react';
import { DOMAIN } from 'constants/domain';
import { FlatList, View, Text } from 'react-native';
import styles from './Styles';
import { LocalizationContext } from 'services/localization/LocalizationContext';
import axios from 'axios';

const SpellScreen = () => {
  const { translations, initializeAppLanguage } = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios.get(`${DOMAIN}spell/`)
      .then((response) => {
        const spells = response.data;
        setData(spells);
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
          <Text style={ styles.title }>
            { translations['spell']['title'] }
          </Text>

          <View style={{ padding:10 }}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={ styles.card }>
                  <Text>Name: { item.name }</Text>
                  <Text>Level: { item.level }</Text>
                  <Text>Effect: { item.effect }</Text>
                </View>
              )}
            />    
        </View>
        </>
      )}
    </View>
  );
};

export default SpellScreen;