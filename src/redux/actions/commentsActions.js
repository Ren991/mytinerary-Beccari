import axios from 'axios';

const commentsActions = {
    addComment: (itineraryId, comment) => {
        return async (dispatch, getState) => {
            console.log(comment)
            console.log(itineraryId)
            try {
                const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/allItineraries/comment/'+itineraryId, {...comment}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            
                console.log(res.data)
                return {success:true, response:res}
            } catch (error) {
                console.log(error)
            }
        }
    }
    /* addComment: (comment) => 
     {
     
        const token = localStorage.getItem('token')
        console.log(token);
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/allItineraries/comment', { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
                 })
            return res
        }
        
    }  */ ,
    modifiComment: (commentId,comment) => {
        
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put('http://localhost:4000/api/allItineraries/comment/' +  commentId,  { ...comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(res)
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
    
                return res
            }catch(err){
                console.log(err)
            }
           
        }
    } ,
    deleteComment: (id) => {

        const token = localStorage.getItem('token')
        console.log(token)
        return async (dispatch, getState) => {
            const res = await axios.delete(`http://localhost:4000/api/allItineraries/comment/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
               
            })
            return res
        }
    },

}

export default commentsActions;