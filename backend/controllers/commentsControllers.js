const Itinerary = require("../models/itinerariesModel");

const commentsControllers = {
  addComment: async (req, res) => {
   // const { itinerary, comment } = req.body.comment;
    const user = req.user._id;
    const comment=req.body.comment
    const itinerary = req.params.id
//console.log(req.body)
//console.log(comment)
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
    //console.log(user);
    //console.log(res.json());
  },
  modifiComment: async (req, res) => {
    //const {comment } = req.body;
    const user = req.user._id;
    //console.log(req.body)
    
    try {
      const newComment = await Itinerary.findOneAndUpdate(
        { "comments._id": req.params.id },
        { $set: { "comments.$.comment": req.body.comment } },
        { new: true }
      );
      //console.log(newComment);
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
  /* deleteComment: async (req, res) => {
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
  }, */
  deleteComment: async (req, res) => {
    console.log("Hugo")
    
    try {
        const deleteComment = await Itinerary.findOneAndUpdate(
            {_id: req.params.id},
            {
                $pull: {
                    comments: {
                        _id: req.body.commentId.commentId
                    }
                }
            },
            {new: true})
      console.log(deleteComment)
        res.json({ success: true, response: deleteComment, message: "has eliminado el comentario" })

    }catch (error) {
        console.log(error)
        res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
    }

},
};
module.exports = commentsControllers;
