import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import {themeColors} from '../../theme/colors';
import {statusType} from '../../utils/constants';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state.tasks);

  // tasklarin status bazinda sayilmasi
  const countTaskStatus = status => {
    return tasks.filter(item => item.status === status).length;
  };

  // tasklarin yuzdeliklerini hesaplama
  const calculateTaskStatus = status => {
    const totalTasks = tasks.length;
    const taskCount = countTaskStatus(status);
    const percentage = ((taskCount / totalTasks) * 100).toFixed(1);

    console.log(status, percentage);
    if (percentage > 0) {
      return `${percentage}% `;
    } else {
      return '0% ';
    }
  };

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary'} />
        <View style={styles.cards}>
          {taskStatus.map(item => (
            <TaskStatusCard
              key={item.id}
              item={item}
              value={countTaskStatus(item.status)}
            />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <VictoryPie
            innerRadius={20}
            standalone={true}
            width={350}
            height={350}
            padAngle={2}
            labelPlacement="perpendicular"
            data={[
              {
                x: calculateTaskStatus(statusType.INPROGRESS),
                y: calculateTaskStatus(statusType.INPROGRESS),
              },
              {
                x: calculateTaskStatus(statusType.INREVIEW),
                y: calculateTaskStatus(statusType.INREVIEW),
              },
              {
                x: calculateTaskStatus(statusType.COMPLETED),
                y: calculateTaskStatus(statusType.COMPLETED),
              },
              {
                x: calculateTaskStatus(statusType.ONHOLD),
                y: calculateTaskStatus(statusType.ONHOLD),
              },
            ]}
            theme={VictoryTheme.clean}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: themeColors.black,
                strokeWidth: 1,
              },
              labels: {
                fontSize: 18,
                fill: themeColors.black,
                fontWeight: 'bold',
              },
            }}
          />
        </View>
        <View>
          <View style={styles.totalTaskcontainer}>
            <Text style={styles.totalTaskText}>
              Total Tasks: {tasks.length}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  totalTaskcontainer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: themeColors.black,
    borderWidth: 1,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: themeColors.purple,
    elevation: 7,
  },
  totalTaskText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.black,
    padding: 5,
    textAlign: 'center',
  },
});
