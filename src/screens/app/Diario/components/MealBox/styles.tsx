import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mealContainer: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    margin: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
  },
  mealText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caloriesText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodText: {
    fontSize: 16,
    color: '#000',
    height: 40,
    textAlignVertical: 'center',
    marginLeft: 15,
  },
  addFoodText: {
    fontSize: 16,
    color: '#1E90FF',
    height: 60,
    textAlignVertical: 'center',
  },
});

export default styles;
