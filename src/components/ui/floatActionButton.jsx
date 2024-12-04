import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {themeColors} from '../../theme/colors';

const FloatActionButton = props => {
  // console.log(props);

  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="50" color={themeColors.black} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    backgroundColor: themeColors.purple,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColors.black,
    shadowColor: themeColors.black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
});
