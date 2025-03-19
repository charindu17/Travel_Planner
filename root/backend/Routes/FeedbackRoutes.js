const express =  require("express");
const router = express.Router();
//insert model
const Feedback = require("../Model/FeedbackModel");
//insert feedback controller
const FeedbackController = require("../Controllers/FeedbackControllers");

router.get("/", FeedbackController.getAllFeedbacks);
router.post("/", FeedbackController.addFeedbacks);
router.get("/:id", FeedbackController.getById);
router.put("/:id", FeedbackController.updateFeedback);
router.delete("/:id", FeedbackController.deleteFeedback);

//export
module.exports = router;