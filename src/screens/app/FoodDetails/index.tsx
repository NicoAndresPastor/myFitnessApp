import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Components
import PieChart from 'react-native-pie-chart';
import CTAButton from '../../../components/CTAButton';
//Styles
import styles from './styles';
//Redux
import {useDispatch} from 'react-redux';

const FoodDetails = ({route, navigation}) => {
  //Dispatch
  const dispatch = useDispatch();
  //Params
  const {foodDetails, mealName, showAcceptButton} = route.params;
  //Variables
  const [servings, setServings] = useState(`${foodDetails.ration}`);
  const [meal, setMeal] = useState(`${mealName}`);
  //HandleButtons
  const handleAcceptButton = modifiedItem => {
    console.log(modifiedItem);
    dispatch({
      type: 'foods/MODIFY_FOOD',
      payload: {modifiedFood: modifiedItem},
    });
    navigation.goBack();
  };
  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
      <View>
        <Text style={styles.title}>{foodDetails.name}</Text>
        <Text style={styles.subtitle}>{foodDetails.brand}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Racion</Text>
            <Picker
              style={[styles.infoValue, {flex: 1}]}
              onValueChange={setServings}>
              <Picker.Item label="Java" value="js" />
            </Picker>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Comida</Text>
            <Text style={styles.infoValue}>{mealName}</Text>
          </View>
        </View>

        <View style={[styles.chartContainer, {flexDirection: 'row'}]}>
          <PieChart
            widthAndHeight={70}
            series={[
              foodDetails.carbohydrates,
              foodDetails.fats,
              foodDetails.proteins,
            ]}
            sliceColor={['#00A9FF', '#87C4FF', '#CDF5FD']}
            coverRadius={0.5}
            coverFill={'#FFF'}
          />
          <Text style={styles.calories}>{foodDetails.calories} cal</Text>
          <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.macroText}>
              {foodDetails.carbohydrates} g Carbohydrates
            </Text>
            <Text style={styles.macroText}>
              {foodDetails.proteins} g Proteins
            </Text>
            <Text style={styles.macroText}>{foodDetails.fats} g Fats</Text>
          </View>
        </View>
      </View>
      {showAcceptButton ? (
        <CTAButton
          text="Accept"
          buttonContainerStyle={{alignSelf: 'flex-end', magin: 20}}
          handleButtonPress={() =>
            handleAcceptButton({
              ...foodDetails,
              ration: servings,
            })
          }
        />
      ) : null}
    </View>
  );
};

export default FoodDetails;
