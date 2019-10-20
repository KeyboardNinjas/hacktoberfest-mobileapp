import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './BottomBar.style';
import GitCat from '../../assets/SVG/GitCat';
import GitCats from '../../assets/SVG/GitCats';
import Add from '../../assets/SVG/Add';
import { WHITE, YELLOW } from '../../data/consts';
import { withNavigation } from 'react-navigation';

const BottomBar = props => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity
      style={styles.catTab}
      onPress={() => props.navigation.navigate('LandingPage')}>
      <GitCat color={props.activeTab === 'catTab' ? YELLOW : WHITE} />
    </TouchableOpacity>
    <View style={styles.plusTab}>
      <TouchableOpacity onPress={props.onAdd}>
        <Add />
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.catTab}
      onPress={() => props.navigation.navigate('Friends')}>
      <GitCats color={props.activeTab === 'catsTab' ? YELLOW : WHITE} />
    </TouchableOpacity>
  </View>
);
export default withNavigation(BottomBar);
