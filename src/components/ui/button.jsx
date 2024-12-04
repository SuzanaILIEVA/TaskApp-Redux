import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../theme/colors';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.green;
      case 'warning':
        return themeColors.yellow;
      case 'danger':
        return themeColors.red;
      default:
        return themeColors.pink;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: themeColors.black,
    elevation: 7,
    paddingVertical: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
