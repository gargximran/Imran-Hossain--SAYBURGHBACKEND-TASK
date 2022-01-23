import { Schema, Model, Document, model } from "mongoose";
import bcrypt from 'bcrypt'


export interface IUser {
    fullName: string,
    email: string,
    password: string,
}

export interface UserDocument extends Document, IUser { }

export interface User extends UserDocument {
    comparePassword(password: string): boolean;
}


export interface IUserModel extends Model<User> {
    hashPassword(password: string): string;
    createOne(user: IUser): Promise<User>;
    emailExistenceCheck(email: string): Promise<User>;
    getByEmail(email: string): Promise<User>;
}

export const UserSchema: Schema = new Schema({
    fullName: {
        type: String,
        required: true,
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

UserSchema.statics = {
    createOne: function (user: IUser): Promise<User> {
        const hashPw = bcrypt.hashSync(user.password, 10)
        return new this({...user, password:hashPw}).save()
    },
    emailExistenceCheck: function (email: string): Promise<User> {
        return this.findOne().where({email: email})
    },
    getByEmail: function(email: string): Promise<User> {
        return this.findOne({where: {email}})
    }
}

UserSchema.methods = {
    comparePassword: function (password: string): boolean {
        return !! bcrypt.compareSync(password, this.password)
    },

}

const UserModel: IUserModel = model<User, IUserModel>('User', UserSchema)

export default UserModel
