import React from "react";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/styles.css";
import clock from "./assets/clock.png";
import like from "./assets/like.png"
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from '../redux/actions/commentsActions';
import citiesActions from "../redux/actions/citiesActions";
import activitiesActions from "../redux/actions/activitiesActions";
import Activities from "./activities";
import Swal from 'sweetalert2'
import "../styles/styles.css";
import { useParams } from 'react-router-dom';


const Itineraries = (props) => {
  const[activities,setActivities]=useState([])
  const [reload, setReload] = useState(false)
  const [liked, setLiked] = useState([])
  const [comentario, setComentario]=useState([])
  const [inputText, setInputText] = useState()
  const [modifi, setModifi] = useState()
  
  const { id } = useParams()
 
  
  useEffect(()=> {
    
    props.getActivities(props.id).then(
      res=>{setActivities(res.response)}
      
    )
    
    
  },[ props.itineraries ])  
   /* useEffect(()=> {
    
    props.getItineraries(id)
    props.getOneCity(id)
    
  },[])  */
  console.log(props)
  console.log(activities);
  async function uploadComment(event) {

    const commentData = {
      itinerary: props.itinerary._id,
      comment: inputText,
    }
    await props.addComment(commentData)
    .then( setInputText(""))
    props.getItineraries(id) 
    setReload(!reload)
  }

  async function modifyComments(event) {
    const commentData = {
      commentID: event.target.id,
      comment: inputText,
    }
    setModifi(!modifi)
    await props.modifiComment(commentData)
    props.getItineraries(id)

  }
  async function deleteComments(event) {
    await props.deleteComment(event.target.id)
    props.getItineraries(id)
  }
  async function likesOrDislikes() {
    await props.likeDislike(props.id)
    props.getItineraries(id)
    ;
    setReload(!reload)
  }

  async function noUser(){
     
    Swal.fire({
      
      icon: 'warning',
      title: "You have to be logged to like it",
      showConfirmButton: false,
      timer: 1500
    })
    //window.location.reload(true);
    
  }
 
console.log(props.itinerary._id);
console.log(props.user)
console.log(props.itinerary.comments)

  return (
    
    <Accordion className="detailsAccordion" defaultActiveKey="1" >
    {props.user?<h2>Hola</h2>:<h2>Chau</h2>}
            <h2 className="itineraryTitle">{props.itinerary.title}</h2>
            <div className="itineraryContainer"> 
            <div className="durationItinerary">
              <h4>
                <img width="50rem" src={clock} />
                {props.itinerary.hours}hs
              </h4>
            </div>
            <div className="priceItinerary">
              <h4>
              <p>Price:{"💵".repeat(parseInt(props.itinerary.price))}</p>
             {/*  <p>{props.itinerary.activities}</p> */}
              </h4>
            </div>
            <div className="userNameImg">
              <h4>
                {props.itinerary.userName}
                <img width="50rem" src={props.itinerary.userImg} className="userImg"/>
              </h4>
            </div>
            <div className="likesItinerary">
              <div className="likeDislike">
                

                {props.user ?//USUARIO CONECTADO ¿?
              (<h1   onClick={likesOrDislikes}>{props.itinerary?.likes.includes(props.user.id) ?//Creamos un boton y le pasamos la funcion likesDislikes
                <span style={{ color: "red", fontSize:30 , backgroundColor:"white",border:"white"}} class="material-icons">favorite</span> ://Si el id del usuario aparece en el array de likes aparece rojo 
                <span className="buttonLikes" style={{  fontSize:30 }}class="material-icons">favorite_border</span>}</h1>)

              : (<h1 className="buttonLikes"   onClick={noUser} style={{  fontSize:30, backgroundColor:"white", border:"white" }} class="material-icons">favorite_border</h1>)
              }

          <h3 style={{  color:"black ",fontSize:30 }}>{props.itinerary?.likes.length}</h3>
              </div>
            </div>
            <div>
              <h5 className="hashtag">
                
                {props.itinerary.hashtags}
              </h5>
            </div>
            
          </div>
      <Accordion.Item eventKey="0" >
        <Accordion.Header >
          <h3 className="accordionHeader">View More</h3>
          
        </Accordion.Header>
        <Accordion.Body>
       <div>
       {activities.map((activity) => (
           
            <Activities img={activity.activitieImg} name={activity.activitieTitle} key={activity._id}  />
          ))}
           <div class="accordion" id={props.itinerary?.title}>
          <div class="accordion-item">
            <h2 class="accordion-header " id={"heading" + props.itinerary?.title}>
              <button class="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.itinerary?.title.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={props.itinerary?.title.replace(/ /g, "").slice(0, 5)}>
                Comentarios
                <span class="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={props.itinerary?.title.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + props.itinerary?.title.replace(/ /g, "").slice(0, 5)}>
                  keyboard_arrow_down
                </span>
              </button>
            </h2>
            <div id={props.itinerary?.title.replace(/ /g, "").slice(0, 5)} class="accordion-collapse collapse " aria-labelledby={"heading" + props.itinerary?.title} data-bs-parent={"#" + props.itinerary?.title}>
              <div class="accordion-body  ">

              
                {props.itinerary?.comments.map(comment =>
                  <>
                    {comment.userID?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          <p>{comment.userID?.name}</p>
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                            
                      <div class="card cardComments">
                        <div class="card-header">
                        <p>{comment.userID?.name}</p> 
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modifyComments} class="btn btn-primary">Modify</button>
                          <button id={comment._id} onClick={deleteComments} class="btn btn-primary">Delete</button>
                        </div>
                      </div>  
                      </div> :
                      <div className="general2">
                      <div>
                        <p>{comment.userID?.name}</p> 
                      </div>
                   <div>
                     <p class="card-text">{comment.comment}</p>
                   </div>

                   </div>
                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      <h3>Leave us your comment</h3>
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={uploadComment} class="btn btn-primary">Send</button>
                    </div>
                  </div> :
                  <h1>Leave us your comment by doing Sign in</h1>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
       
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
  );
};


const mapDispatchToProps = {
  likeDislike: itinerariesActions.likeDislike,//Las acciones de itinerarios que necesito
  getCities: citiesActions.getCities,//Las acciones de ciudades que necesito
  getActivities: activitiesActions.getActivities,
  getItineraries: itinerariesActions.getItineraries,
  addComment: commentsActions.addComment,
  modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
  
  
};
const mapStateToProps = state => {
  return {
    cities: state.citiesR.cities, //El estado de ciudades que necesito para que luego se modifique
    itineraries: state.itinerarieR.itineraries,//El estado de itinerarios que necesito
    activities:state.activitieR.activities,
    user:state.userR.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);




