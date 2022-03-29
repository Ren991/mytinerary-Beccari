import React from "react";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/styles.css";
import clock from "./assets/clock.png";
import like from "./assets/like.png";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions";
import citiesActions from "../redux/actions/citiesActions";
import activitiesActions from "../redux/actions/activitiesActions";
import Comments from "./comments";
import Comment from "./comment";
import Swal from "sweetalert2";
import Carousel from "react-bootstrap/Carousel";

import "../styles/styles.css";
import { useParams } from "react-router-dom";

const Itineraries = (props) => {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    props.getActivities(props.id).then((res) => {
      setActivities(res.response);
    });
  }, [props.itineraries]);

  console.log(props);
  console.log(activities);

  async function likesOrDislikes() {
    await props.likeDislike(props.id);
    props.getItineraries(id);
    setReload(!reload);
  }

  async function noUser() {
    Swal.fire({
      icon: "warning",
      title: "You have to be logged to like it",
      showConfirmButton: false,
      timer: 1500,
    });
    //window.location.reload(true);
  }

  console.log(props.itinerary._id);
  console.log(props.user);
  console.log(props.itinerary.comments);

  return (
    <Accordion className="detailsAccordion" defaultActiveKey="1">
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
          </h4>
        </div>
        <div className="userNameImg">
          <h4>
            {props.itinerary.userName}
            <img
              width="50rem"
              src={props.itinerary.userImg}
              className="userImg"
            />
          </h4>
        </div>

        <div className="likesItinerary">
          <div className="likeDislike d-flex">
            {props.user ? (
              <h1 className="buttonLikes" onClick={likesOrDislikes}>
                {props.itinerary.likes.includes(props.user.id) ? (
                  <h1
                    style={{ color: "red", fontSize: 30 }}
                    className="material-icons buttonLikes"
                  >
                    favorite
                  </h1>
                ) : (
                  <h1
                    className="material-icons buttonLikes"
                    style={{ fontSize: 30 }}
                  >
                    favorite_border
                  </h1>
                )}
              </h1>
            ) : (
              <span
                className="material-icons buttonLikes"
                onClick={noUser}
                style={{ fontSize: 30 }}
              >
                favorite_border
              </span>
            )}

            {
              <h3 style={{ color: "black ", fontSize: 30 }}>
                {props.itinerary.likes.length}
              </h3>
            }
          </div>
        </div>

        <div>
          <h5 className="hashtag">{props.itinerary.hashtags}</h5>
        </div>
      </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h3 className="accordionHeader">View More</h3>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="activities">
              
              <Carousel
                className="carouselAct"
                cols={1}
                rows={1}
                autoplay={2300}
                gap={10}
                loop
                mobileBreakpoint={164}
              >
                {activities.map((activity, index) => (
                  <Carousel.Item key={index}>
                    <div className="imgText">
                      <h3
                        style={{
                          position: "relative",
                          color: "white",
                          right: 2,
                        }}
                      >
                        {activity.activitieTitle}
                      </h3>
                      <img
                        className="img"
                        src={activity.activitieImg}
                        width="90%"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            
            <h2>Comments</h2>
            {props.itinerary.comments.map((comment) => (
              <Comments
                itineraryId={props.id}
                commentId={comment._id}
                comment={comment}
                key={comment._id}
              />
            ))}
            <Comment itineraryId={props.id} />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

const mapDispatchToProps = {
  likeDislike: itinerariesActions.likeDislike, //Las acciones de itinerarios que necesito
  getCities: citiesActions.getCities, //Las acciones de ciudades que necesito
  getActivities: activitiesActions.getActivities,
  getItineraries: itinerariesActions.getItineraries,
  addComment: commentsActions.addComment,
  //modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
  getOneCitie: citiesActions.getOneCitie,
};
const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities, //El estado de ciudades que necesito para que luego se modifique
    itineraries: state.itinerarieR.itineraries, //El estado de itinerarios que necesito
    activities: state.activitieR.activities,
    user: state.userR.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
