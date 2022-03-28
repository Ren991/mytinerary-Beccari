import axios from "axios"

const activitiesActions = {
  
    getActivities: (id) => {
        console.log(id)  
      return async (dispatch, getState) => {
        
        
            try{
              const res = await axios.get("http://localhost:4000/api/allActivities/"+id)
            console.log(res); 
           // dispatch({ type: 'GET_ACTIVITIES', payload: res.data.response})
          return {
            success:true,
            response:res.data.response
          }
            }catch (err){
              return{
                succes:false,
                response:err.message
              }
            }
             
   
    }
  
    }
  }
  
  export default activitiesActions