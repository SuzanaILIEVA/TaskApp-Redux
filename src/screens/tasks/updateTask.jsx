import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {updateTask} from '../../store/actions/taskActions';
import {statusType} from '../../utils/constants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Calendar} from 'iconsax-react-native';
import {themeColors} from '../../theme/colors';
import CheckBox from 'react-native-check-box';

const UpdateTask = ({route}) => {
  console.log('route==>', route);
  const task = route?.params.task;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();

  const saveTask = () => {
    const taskForm = {
      id: task.id,
      title,
      date,
      status,
      isUpdate,
    };

    // console.log(taskForm);
    dispatch(updateTask(taskForm));
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    setDate(date.toISOString().split('T')[0]); // ISO 8601 formatına uygun tarih formatına çevirer
    hideDatePicker();
  };

  return (
    <View style={[defaultScreenStyle.container, {paddingTop: 15}]}>
      <Input
        onChangeText={value => setTitle(value)}
        value={title}
        title="Task Title"
        placeholder="Please set Task"
      />
      <Text style={styles.inputTitle}>Task Date</Text>
      <View style={styles.dateinput}>
        {/* Tarih Girişi Alanı */}

        <TextInput
          onChangeText={value => setDate(value)}
          placeholder="Please set Date"
          editable={false} // Girişi sadece tarih seçici üzerinden yapılabilir hale getirir
          value={date}
          style={{fontSize: 18, fontWeight: '500'}}
        />
        <Pressable onPress={showDatePicker}>
          <Calendar size={24} />
        </Pressable>
        {/* Tarih Seçici Modal */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      {/* checkbox  for status*/}
      <Text style={styles.inputTitle}>Task Status</Text>
      <View style={styles.CheckBoxContainer}>
        <CheckBox
          style={{margin: 5, padding: 5}}
          onClick={() => setStatus(statusType.INPROGRESS)}
          isChecked={status === statusType.INPROGRESS}
          leftText={statusType.INPROGRESS}
          leftTextStyle={{fontSize: 18}}
          checkedCheckBoxColor={themeColors.darkblue}
        />
        <CheckBox
          style={{margin: 5, padding: 5}}
          onClick={() => setStatus(statusType.INREVIEW)}
          isChecked={status === statusType.INREVIEW}
          leftText={statusType.INREVIEW}
          leftTextStyle={{fontSize: 18}}
          checkedCheckBoxColor={themeColors.lightBlue}
        />
        <CheckBox
          style={{margin: 5, padding: 5}}
          onClick={() => setStatus(statusType.ONHOLD)}
          isChecked={status === statusType.ONHOLD}
          leftText={statusType.ONHOLD}
          leftTextStyle={{fontSize: 18}}
          checkedCheckBoxColor={themeColors.yellow}
        />
        <CheckBox
          style={{margin: 5, padding: 5}}
          onClick={() => setStatus(statusType.COMPLETED)}
          isChecked={status === statusType.COMPLETED}
          leftText={statusType.COMPLETED}
          leftTextStyle={{fontSize: 18}}
          checkedCheckBoxColor={themeColors.green}
        />
      </View>
      <Button onPress={() => saveTask()} title="Update" status="warning" />
    </View>
  );
};

export default UpdateTask;

const styles = StyleSheet.create({
  dateinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    fontSize: 18,
    borderRadius: 5,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 10,
  },
  inputTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: themeColors.black,
    marginBottom: 2,
    marginLeft: 10,
    marginTop: 10,
  },

  CheckBoxContainer: {
    margin: 10,
    borderBlockColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
