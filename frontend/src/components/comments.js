import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import Avatar from "@mui/material/Avatar";
import Swal from 'sweetalert2'

const Comments = (props) => {
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams();
  const input = useRef();
  const [inputText, setInputText] = useState("");
  const [modify, setModify] = useState(false);
  const [reload, setReload] = useState(false);

  async function modificarComentario(commentId) {
    const commentData = {
      comment: input.current.value,
    };
    console.log(modify);
    setModify(!modify);
    await props.modifiComment(commentId, commentData);
    props.getItineraries(id);
    props.getOneCitie(id);

    setReload(!reload);
  }
  async function eliminarComentario(commentId) {
    const commentData = {
      commentId: commentId,
    };
    props
      .deleteComment(props.itineraryId, commentData)
      .then((res) => {
        if (res.data.success) {
          props.getItineraries(id);
          props.getOneCitie(id);
          setReload(!reload);
        }
        Swal.fire({
            icon: 'error',
            
            text: 'Your comment has been deleted!',
            
          })
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      
      {props.comment.userID?._id !== props.user?.id ? (
        <div className="card cardComments cardUserImg " key={props.comment._id}>
          <div className="card-header cardHeader">
            
            <Avatar className="userAvatar" src={props.comment.userID?.photo} alt="foto" />
            <h4>{props.comment.userID?.name}:</h4>
            <p className="card-text cardText comment">"{props.comment.comment}"</p>
      </div>

        
        </div>
      ) : (
        <div className="card cardComments">
          <div className="card-header cardHeader">
          <Avatar src={props.comment.userID?.photo} alt="foto" />
            <h4>{props.comment.userID.name}</h4>
           
          </div>
          <div className="card-body ">
            <div type="text" className="card-text textComments">
              {modify ? (
                <input defaultValue={props.comment.comment} ref={input} />
              ) : (
                <p className="comment">"{props.comment.comment}"</p>
              )}
            </div>
            {modify ? (
              <>
                <button
                  id={props.comment._id}
                  onClick={() => modificarComentario(props.commentId)}
                  className="btn btn-primary btnComments"
                >
                  Confirm Modify
                </button>
                <button
                  id={props.comment._id}
                  onClick={() => setModify(!modify)}
                  className="btn btn-primary"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                id={props.comment._id}
                onClick={() => setModify(!modify)}
                className="btn btn-primary"
              >
                Modify
              </button>
            )}
            <button
              id={props.commentId}
              onClick={() => eliminarComentario(props.commentId)}
              className="btn btn-primary btnComments"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  likeDislike: itinerariesActions.likeDislike, //Las acciones de itinerarios que necesito
  getCities: citiesActions.getCities, //Las acciones de ciudades que necesito
  getActivities: activitiesActions.getActivities,
  getItineraries: itinerariesActions.getItineraries,
  addComment: commentsActions.addComment,
  modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
  getOneCitie: citiesActions.getOneCitie,
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
    itineraries: state.itinerarieR.itineraries,
    activities: state.activitieR.activities,
    user: state.userR.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
