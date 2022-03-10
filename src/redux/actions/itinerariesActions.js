const itinerariesActions = {
    getItineraries: (id) => {
      /* console.log(id) */
      return async (dispatch, getState) => {
        const response = await fetch('http://localhost:4000/api/allitineraries/'+id)
        const data = await response.json()
        //console.log(data);
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
      }
    }
  
  
  }
  
  export default itinerariesActions