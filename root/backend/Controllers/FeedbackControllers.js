const Feedback = require("../Model/FeedbackModel");

const getAllFeedbacks = async (req, res, next) => {
    let Feedbacks;

    //get all users
    try{
        feedbacks = await Feedback.find();
    }catch(err){
        console.log(err);
    }

    //not found users
    if(!feedbacks){
        return res.status(404).json({message: "Feedback not found"});
    }
    //display all users
    return res.status(200).json({feedbacks});

};

//data insert
const addFeedbacks = async (req, res, next) => {
    const {comment, picture, rating} = req.body;

    let feedbacks;

    try{
        feedbacks = new Feedback({comment, picture, rating});
        await feedbacks.save();
    }catch(err){
        console.log(err);
    }

    //not insert feedbacks
    if(!feedbacks){
        return res.status(404).send({message: "unable to add feedbacks"});
    }
    return res.status(200).json({ feedback });
}

//get by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let feedback;

    try{
        feedback = await Feedback.findById(id);
    }catch(err){
        console.log(err);
    }

    //if not availabe feedbacks
    if(!feedback){
        return res.status(404).send({message: "No feedbacks available"});
    }
    return res.status(200).json({ feedback });
}

//update feedbacks
const updateFeedback = async (req, res, next) => {
    const id = req.params.id;

    const {comment, picture, rating} = req.body;

    let feedbacks;

    try{
        feedbacks = await Feedback.findByIdAndUpdate(id,
            { comment: comment, picture: picture, rating: rating });
            feedbacks = await feedbacks.save();
    }catch(err){
        console.log(err);
    }
    if(!feedbacks){
        return res.status(404).send({message: "Unable to update"});
    }
    return res.status(200).json({ feedbacks });
}

//delete feedbacks
const deleteFeedback = async (req, res, next) => {
    const id = req.params.id;

    let feedback;

    try{
        feedback = await Feedback.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!feedback){
        return res.status(404).send({message: "Unable to delete"});
    }
    return res.status(200).json({ feedback });
}


exports.getAllFeedbacks = getAllFeedbacks;
exports.addFeedbacks = addFeedbacks;
exports.getById = getById;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;