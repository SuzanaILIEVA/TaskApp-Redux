import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWTASK, DASHBOARD, TASKS, UPDATETASK} from '../utils/routes';
import {
  ArrowCircleRight2,
  MoreCircle,
  Notification,
  TaskSquare,
} from 'iconsax-react-native';
import {themeColors} from '../theme/colors';
import AddNewTask from '../screens/tasks/addNewTask';
import UpdateTask from '../screens/tasks/updateTask';

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: route.name,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        headerBackTitle: 'Back',
        headerTintColor: themeColors.black,

        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
      })}>
      <Stack.Screen
        name={DASHBOARD}
        component={Dashboard}
        options={({route, navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: 20}}>
              <Pressable>
                <Notification size={30} color={themeColors.black} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate(TASKS)}>
                <TaskSquare size={30} color={themeColors.black} />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name={TASKS}
        component={Tasks}
        options={({route, navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: 20}}>
              <Pressable>
                <ArrowCircleRight2 size={30} color={themeColors.black} />
              </Pressable>
              <Pressable>
                <MoreCircle size={30} color={themeColors.black} />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen name={ADDNEWTASK} component={AddNewTask} />
      <Stack.Screen name={UPDATETASK} component={UpdateTask} />
    </Stack.Navigator>
  );
};

export default RouteNavigator;

const styles = StyleSheet.create({});
