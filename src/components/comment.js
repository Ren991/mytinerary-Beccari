import * as React from 'react';
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from '../redux/actions/itinerariesActions';
import commentsActions from '../redux/actions/commentsActions';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import activitiesActions from '../redux/actions/activitiesActions';
import Swal from 'sweetalert2'

const Comment = (props) => {
  
    
    const {id} = useParams()
    
    const [inputText, setInputText] = useState("")
    const [modify, setModify] = useState(false)
    const [reload, setReload] = useState(false)
        
  
    const cargarComentario = async () => {
      const commentData = {
        comment: inputText,
      }
      console.log(commentData)
      props.addComment(props.itineraryId, commentData).then(
        res=>{
            console.log(res.response.data.success)
            if(res.response.data.success) {
              setInputText("")
              props.getOneCitie(id)
              props.getItineraries(id)
              setReload(!reload)
              Swal.fire(
                'Good job!',
                'Your comment has been sent!',
                'success'
              )
            }
        }  
      ).catch(
          err=>console.log(err)
      )      
     
     }

        return (   
            <>
            {props.user ?
                  <div className="card cardComments">
                    <div className="card-header cardHeaderNew">
                      LEAVE US YOUR COMMENT!
                    </div>
                    <div className="card-body ">
                      <div >
                        <input id="nuevoComentario" placeholder='Write a comment...' className="card-text textComments border border-dark mb-3" value={inputText} onChange={(event) => setInputText(event.target.value)} />
                      </div>
                      <button onClick={cargarComentario} className="btn btn-primary btnComments">Send</button>
                    </div>
                  </div> :
                  <h1 className='yourComment'>Leave us your comment by doing Sign in!!</h1>
                }
            </> 
                
         
        );

    
   
    
}
 


const mapDispatchToProps = {
         
          getCities: citiesActions.getCities,//Las acciones de ciudades que necesito
          getActivities: activitiesActions.getActivities,
          getItineraries: itinerariesActions.getItineraries,
          addComment: commentsActions.addComment,
          //modifiComment: commentsActions.modifiComment,
          deleteComment: commentsActions.deleteComment,
          getOneCitie:citiesActions.getOneCitie,
          
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
    itineraries: state.itinerarieR.itineraries,
    activities:state.activitieR.activities,
    user:state.userR.user
    
             
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);