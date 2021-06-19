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
    <>
      <View style={ styles.container }>
        <Text style={ styles.title }>
          { translations['spell']['title'] }
        </Text>
        {/* <Text style={ styles.description }>
          { translations['spell']['description'] }
        </Text> */}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={ styles.cardStyle }>
              <Text>Name: { item.name }</Text>
              <Text>Level: { item.level }</Text>
            </View>
          )}
        />
      </View>
  </>
  );
};

export default SpellScreen;