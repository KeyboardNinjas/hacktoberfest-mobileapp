import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './BottomBar.style';
import GitCat from '../../Assets/SVG/GitCat';
import GitCatYellow from '../../Assets/SVG/GitCatYellow'; //only when active
import GitCats from '../../Assets/SVG/GitCats';
import GitCatsYellow from '../../Assets/SVG/GitCatsYellow'; //only when active
import Add from '../../Assets/SVG/Add';

const BottomBar = props => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity style={styles.catTab}>
      <GitCat />
    </TouchableOpacity>
    <TouchableOpacity style={styles.plusTab}>
      <Add />
    </TouchableOpacity>
    <TouchableOpacity style={styles.catTab}>
      <GitCats />
    </TouchableOpacity>
  </View>
);
export default BottomBar;
