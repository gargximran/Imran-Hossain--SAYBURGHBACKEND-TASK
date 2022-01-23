import { Schema, Model, Document, model } from "mongoose";




export interface ITag{
    name: string,
    slug: string
}


export interface Tag extends Document, ITag { }


export interface ITagModel extends Model<Tag> { }

export const TagSchema: Schema = new Schema<ITag>({
    name: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        min: 2,
        max: 15
    },
    slug: {
        type: Schema.Types.String,
        unique: true,
        required: true
    }

})

const tagModel: ITagModel = model<Tag, ITagModel>("Tag", TagSchema)

export default tagModel



