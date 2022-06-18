import React, {useContext, useEffect, useState} from 'react';
import {DOMAIN} from 'constants/domain';
import {FlatList, View, Text, Image} from 'react-native';
import styles from './MagicStyles';
import {LocalizationContext} from 'services/localization/LocalizationContext';
import axios from 'axios';

const MagicScreen = ({navigation, route}) => {
  const {magic} = route.params;
  const {translations, initializeAppLanguage} = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get(`${DOMAIN}spell/${magic}`)
      .then(response => {
        const spells = response.data;
        setData(spells);
      })
      .catch(error => {
        console.error('The error: ', error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.title}>{translations.loading}</Text>}
      {!isLoading && (
        <>
          <Text style={styles.title}>
            {translations.spell.title} {magic}
          </Text>
          <View style={{padding: 10}}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <View style={styles.imgContainer}>
                    <Image source={{uri: item.imageUrl}} style={styles.image} />
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.titleText}>
                      {translations.spell.name}: {item.name}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.spell.level}: {item.level}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.spell.effect}: {item.effect}
                    </Text>
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

export default MagicScreen;
