import { Schema, Model, Document, model, ObjectId } from "mongoose";



export interface IComment{
    commenter: ObjectId | string,
    comment: string,
    createdAt: Date
}

export interface IBlog {
    title: string,
    slug: string,
    body: string,
    comments: IComment[],
    createdAt: Date,
    author: ObjectId,
    tags: ObjectId[]
}

export interface Blog extends Document, IBlog { }


export interface IBlogModel extends Model<Blog> { }

export const BlogSchema: Schema = new Schema<IBlog>({
    title: {
        type: Schema.Types.String,
        required: true,
        min: 10,
        max: 40
    },
    slug: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ],
    body: {
        type: Schema.Types.String,
        required: true,
        min: 25
    },
    createdAt: {
        type: Schema.Types.Date,
        default: new Date()
    },
    comments: [
        {
            commenter: {
                type:Schema.Types.ObjectId,
                ref: "User"
            },
            comment: {
                type: Schema.Types.String
            },
            createdAt: {
                type: Schema.Types.Date,
                default: new Date()
            }
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const blogModel: IBlogModel = model("Blog", BlogSchema)

export default blogModel



