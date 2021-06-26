import React from 'react';
import { Image } from 'react-native';
import styles from './StyleImageHome';

const ImageHome = () => (
   <Image
     style={styles.image}
     source = {
       require('assets/images/HeroesIIIHOTA.jpg')
     }
   />
);

export default ImageHome;