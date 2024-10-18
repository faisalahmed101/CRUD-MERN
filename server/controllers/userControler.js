import User from "../models/userModel.js";

export const create = async (req, res) => {

    console.log(req.body);
    

    try {
        const userData = new User(req.body)
        console.log(userData)

        if (!userData) {
            return res.status(400).json({ msg: "User data not found" })
        }

        const savedData = await userData.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).send("User created successfully")
    }

}

export const allUsers =async (req, res)=>{
    
    try {
        const allUser = await User.find()

        if(!allUser){
            res.status(400).json({msg: "User data not found"})
        }
        res.status(200).json(allUser)
    } catch (error) {
        res.status(400).json({error: error})
    }
}