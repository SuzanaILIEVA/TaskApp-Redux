import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../theme/colors';

const TaskStatusCard = ({item, value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
        <View>
          <Pressable>
            <View
              style={{
                backgroundColor: 'white',
                width: 35,
                height: 35,
                borderRadius: 17,
                borderColor: themeColors.black,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: themeColors.black,
                  fontSize: 25,
                  textAlign: 'center',
                }}>
                •••
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    width: '45%',
    height: 170,
    borderRadius: 8,
    borderBlockColor: themeColors.black,
    borderWidth: 1,
    elevation: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 30,
    fontWeight: '700',
    color: themeColors.black,
  },
  status: {
    fontSize: 20,
    fontWeight: '600',
    color: themeColors.black,
    marginTop: 10,
  },
});
