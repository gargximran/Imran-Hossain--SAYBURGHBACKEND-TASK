import { Schema, model } from "mongoose";


interface User {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}

const userSchema = new Schema<User>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = model<User>('user', userSchema)

export default UserModel
