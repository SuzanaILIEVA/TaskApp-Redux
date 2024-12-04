import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SectionTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
});
