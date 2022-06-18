import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import styles from './Styles';
import {LocalizationContext} from 'services/localization/LocalizationContext';

const ScreenSetting = ({navigation}) => {
  const {translations, appLanguage, setAppLanguage} =
    useContext(LocalizationContext);

  const handleSetLanguage = async language => {
    setAppLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.setting.changeLanguage}</Text>

      {translations.getAvailableLanguages().map(item => (
        <View key={item}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => handleSetLanguage(item)}>
            <Text style={styles.items}>{item}</Text>
            {appLanguage === item ? <Text style={styles.check}>√</Text> : null}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ScreenSetting;
