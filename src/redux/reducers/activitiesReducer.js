const initialState = {
activitie: []
  }
  
  const activityReducer = (state = initialState, action) => {
    switch(action.type){
      case 'GET_ACTIVITIES':
        //console.log(action.payload)
        return {
          ...state,
      activitie: action.payload
        }
      default:
      return state
    }
  }
  
  export default activityReducer