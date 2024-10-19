import User from "../models/userModel.js";


//  create new user api
export const create = async (req, res) => {
    try {
        const userData = new User(req.body)
        console.log(userData)

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }

        const savedData = await userData.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).send({error: error})
    }

}


// get all users
export const allUsers = async (req, res) => {
    try {
        const allUser = await User.find()

        if (!allUser) {
            res.status(404).json({ msg: "User data not found" })
        }
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// get single user
export const getOneUser = async (req, res)=>{
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if(!user){
            res.status(404).json({msg: "user not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

//update user data
export const updateUser = async (req, res)=>{
    const id = req.params.id
    const updatedData = req.body
    try {
        const user = User.findById(id)
        if(!user){
            res.status(401).json({msg: "User not found"})
        }
        const update = await User.findByIdAndUpdate(id, updatedData, {new: true})
        res.status(200).json(update)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// User delete
export const deleteUser = async (req, res)=>{
    const id = req.params.id
    try {
        const user = await User.findById(id)

        if(!user){
            res.status(401).json({msg: "User not found"})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg: "User delete successfully"})
    } catch (error) {
        res.status(500).json({error: error})
    }

}