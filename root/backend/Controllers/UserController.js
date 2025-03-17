const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => { // Add async here
    let users;
    try {
        users = await User.find(); // Await inside async function
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
    }

    // Not found case
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }

    // Display users
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;


// exports.createUser = (req,res)=>{
//     const user = new User({
//         userID:req.body.userID,
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,
//         userType:req.body.userType,
//         preferences:req.body.preferences,
//         createdAt:req.body.createdAt
//     });
//     user.save()
//     .then(()=>{
//         res.send("user created");
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// }