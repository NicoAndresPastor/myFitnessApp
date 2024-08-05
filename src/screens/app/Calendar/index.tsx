import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import Pressable from '../../../components/PressableOpacity';

const Calendar = ({navigation}) => {
  const [date, setDate] = useState('1');
  console.log(date);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a date</Text>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={params => setDate(params.date)}
      />
      <Pressable style={styles.botton} onPress={() => navigation.goBack()}>
        <Text>Accept</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'space-around',
    flex: 1,
  },
  text: {
    marginVertical: 20,
  },
  botton: {
    alignSelf: 'flex-end',
  },
});

export default Calendar;
