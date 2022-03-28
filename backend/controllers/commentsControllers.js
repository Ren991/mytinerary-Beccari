const Itinerary = require("../models/itinerariesModel");

const commentsControllers = {
  addComment: async (req, res) => {
    const { itinerary, comment } = req.body.comment;
    const user = req.user._id;

    try {
      const nuevoComment = await Itinerary.findOneAndUpdate(
        { _id: itinerary },
        { $push: { comments: { comment: comment, userID: user } } },
        { new: true }
      )
      
        .populate("comments.userID", { name: 1 });
      res.json({
        success: true,
        response: { nuevoComment },
        message: "Thanks for your comments",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong please try again in a few seconds",
      });
    }
    console.log(user);
    console.log(res.json());
  },
  modifiComment: async (req, res) => {
    const {comment } = req.body;
    const user = req.user._id;
    try {
      const newComment = await Itinerary.findOneAndUpdate(
        { "comments._id": req.params.id },
        { $set: { "comments.$.comment": comment } },
        { new: true }
      );
      console.log(newComment);
      res.json({
        success: true,
        response: { newComment },
        message: "Your comment has been modified",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: true,
        message: "Something went wrong please try again in a few seconds",
      });
    }
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    const user = req.user._id;
    try {
      const deleteComment = await Itinerary.findOneAndUpdate(
        { "comments._id": id },
        { $pull: { comments: { _id: id } } },
        { new: true }
      );
      console.log(deleteComment);
      res.json({
        success: true,
        response: { deleteComment },
        message: "Your comment has been deleted",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong please try again in a few seconds",
      });
    }
  },
};
module.exports = commentsControllers;
