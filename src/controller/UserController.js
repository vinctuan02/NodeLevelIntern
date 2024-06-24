import UserService from '../service/UserService'

const helloWorld = (req, res) => {
    try {
        console.log("hi")
        return res.send("hi")
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async (req, res) => {
    try {
        const { page = 1, limit = 6 } = req.query
        const response = await UserService.getUsers(+page, +limit)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(200).json({
                status: "fail",
                message: "Not found id."
            })
        }
        const response = await UserService.getUser(id)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}


const createUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const userData = { email, password }
        const response = await UserService.createUser(userData)
        return res.status(200).json(response)
    } catch (error) {
        return error
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, email, password } = req.body
        if (!id && !email && !password) {
            return res.status(200).json({
                status: "fail",
                message: "Missing inputs"
            })
        }
        const userData = { id, email, password }
        const response = await UserService.updateUser(userData)
        return res.status(200).json(response)
    } catch (error) {
        return error
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(200).json({
                status: "fail",
                message: "Missing input"
            })
        }

        const response = await UserService.deleteUser(id)
        return res.status(200).json(response)
    } catch (error) {
        return error
    }
}

module.exports = {
    helloWorld,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}