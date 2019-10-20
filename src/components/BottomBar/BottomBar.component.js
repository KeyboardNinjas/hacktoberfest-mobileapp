import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './BottomBar.style';
import GitCat from '../../assets/SVG/GitCat';
import GitCats from '../../assets/SVG/GitCats';
import Add from '../../assets/SVG/Add';
import { WHITE, YELLOW } from '../../data/consts';

const BottomBar = props => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity style={styles.catTab}>
      <GitCat color={props.activeTab === 'catTab' ? YELLOW : WHITE} />
    </TouchableOpacity>
    <View style={styles.plusTab}>
      <TouchableOpacity onPress={props.onAdd}>
        <Add />
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.catTab}>
      <GitCats color={props.activeTab === 'catTabs' ? YELLOW : WHITE} />
    </TouchableOpacity>
  </View>
);
export default BottomBar;
