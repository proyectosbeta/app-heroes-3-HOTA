import React, {useContext, useEffect, useState, useCallback} from 'react';
import {DOMAIN} from 'constants/domain';
import {FlatList, View, Text, Image} from 'react-native';
import styles from './CastleStyles';
import {LocalizationContext} from 'services/localization/LocalizationContext';
import axios from 'axios';

// const changeTitleNavigation = (navigation, creature) => {
//   navigation.setOptions({
//     title: creature,
//   });
// };

const Castle = ({navigation, route}) => {
  const {creature} = route.params;
  const {translations} = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const loadData = useCallback(() => {
    axios
      .get(`${DOMAIN}creatures/${creature}`)
      .then(response => {
        const creatures = response.data;
        setData(creatures);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [creature]);

  useEffect(() => loadData(), [loadData]);

  // changeTitleNavigation(navigation, creature);

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.title}>{translations.loading}</Text>}
      {!isLoading && (
        <>
          <Text style={styles.title}>
            {translations.creature.title} {creature}
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
                      {translations.creature.name}: {item.name}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.level}: {item.level}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.attack}: {item.attack}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.defense}: {item.defense}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.damage}: {item.damage}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.health}: {item.health}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.speed}: {item.speed}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.size}: {item.size}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.shots}: {item.shots}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.aiValue}: {item.aiValue}
                    </Text>
                    <Text style={styles.titleText}>
                      {translations.creature.specialAbilities}:{' '}
                      {item.specialAbilities}
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

export default Castle;
