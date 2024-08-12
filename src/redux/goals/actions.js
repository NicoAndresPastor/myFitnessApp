import { UPDATE_USER_DATA2, UPDATE_USER_DATA1, UPDATE_USER_DATA3 } from "./types";

export const updateUserData2 = (userTarget) => async (dispatch) => {
    dispatch({ 
        type: UPDATE_USER_DATA2, 
        payload: { userTarget }
    });
};

export const updateUserData3 = (userWeight, userWeightIdeal, userTargetTime) => async (dispatch) => {
    dispatch({ 
        type: UPDATE_USER_DATA3,
        payload: { userWeight, userWeightIdeal, userTargetTime }
    });
};

export const updateUserData1 = (userAge, userHeight, userGender, userActivityDays) => async (dispatch) => {
    dispatch({
        type: UPDATE_USER_DATA1,
        payload: { userAge, userHeight, userGender, userActivityDays }
    });
};
