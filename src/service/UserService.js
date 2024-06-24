import { where } from 'sequelize'
import User from '../models/User'

const getUsers = async (page, limit) => {
    try {

        const countUser = await User.count()
        const per_page = limit
        const total_pages = Math.ceil(countUser / per_page)

        const Users = await User.findAll({
            limit,
            offset: (page - 1) * limit
        })

        return ({
            page: page, //page hiện tại
            per_page, // số bản ghi trên 1 trang
            total: countUser, //tổng bản ghi
            total_pages, //tổng page
            data: Users
        })
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (id) => {
    try {
        const userById = await User.findOne({
            where: { id }
        })
        return ({
            errCode: 0,
            message: 'Get user successed.',
            data: userById
        })
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (userData) => {
    try {
        const { email, password } = userData
        const newUser = await User.create({ email, password })

        return ({
            errCode: 0,
            message: 'Create user successed.',
            data: newUser
        })
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (userData) => {
    try {
        const { id, email, password } = userData

        let userById = await User.findOne({
            where: { id }
        })

        if (!userById) {
            return ({
                errCode: 0,
                message: 'User not found.',
            })
        }

        userById.email = email
        userById.password = password

        userById.save()

        return ({
            errCode: 0,
            message: 'Update user successed.',
            data: userById
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {
    try {

        let userById = await User.findOne({
            where: { id }
        })

        if (!userById) {
            return ({
                errCode: 0,
                message: 'User not found.',
            })
        }

        userById.destroy()

        return ({
            errCode: 0,
            message: 'Delete user successed.',
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}