import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';
import {ADDNEWTASK} from '../../utils/routes';

const Tasks = ({navigation}) => {
  const {tasks} = useSelector(status => status?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={tasks}
        ListEmptyComponent={() => (
          <Text style={styles.notaskText}>
            There are no registered tasks yet!!!
          </Text>
        )}
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWTASK)} />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  notaskText: {
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    margin: 10,
  },
});
