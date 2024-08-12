import { UPDATE_USER_DATA2, UPDATE_USER_DATA1, UPDATE_USER_DATA3 } from '../types';

const initialState = {
  selectedGoal: 'loseWeight',
  userWeightIdeal: 65,
  userWeight: 70,
  userHeight: 175,
  userAge: 25,
  activityDays: '1-2',
  gender: 'male'
};

const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA1:
      return {
        ...state,
        userAge: action.payload.userAge,
        userHeight: action.payload.userHeight,
        userGender: action.payload.userGender,
        userActivityDays: action.payload.userActivityDays
      }
    case UPDATE_USER_DATA2:
      return {
        ...state,
        userTarget : action.payload.userTarget

      }
    case UPDATE_USER_DATA3:
      return {
        ...state,
        userWeight: action.payload.userWeight,
        userWeightIdeal: action.payload.userWeightIdeal,
        userTargetTime: action.payload.userTargetTime
      }

    default:
      return state;
  }
};

// Función para convertir activityDays a un nivel de actividad
const getActivityLevel = (activityDays) => {
  switch (activityDays) {
    case '0':
      return 1.2;
    case '1-2':
      return 1.375;
    case '3-4':
      return 1.55;
    case '5-7':
      return 1.725;
    default:
      return 1.2;
  }
};

export const calculateCaloricRequirement = () => (dispatch, getState) => {
  const { userWeight, userHeight, userAge, activityDays, gender, selectedGoal } = getState().goals;

  // Calcular TMB según el género
  const bmr = gender === 'male'
    ? 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5
    : 10 * userWeight + 6.25 * userHeight - 5 * userAge - 161;

  
  const activityLevel = getActivityLevel(activityDays);
  let caloricGoal = bmr * activityLevel;

  
  if (selectedGoal === 'loseWeight') {
    caloricGoal -= 500;  
  } else if (selectedGoal === 'gainMuscle') {
    caloricGoal += 500;  
  }
 

  dispatch({ type: SET_CALORIC_GOAL, payload: caloricGoal });
};

export default goalsReducer;
