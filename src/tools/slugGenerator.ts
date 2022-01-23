import { Model} from "mongoose";
import { nanoid } from "nanoid";

const slugGenerator = (text: string, model: Model<any>): Promise<string> => {

    return new Promise<string>(async (resolve, reject) => {
        try{
            let available: boolean = true;
            let FirstSlug: string = text.toLowerCase().split(' ').join('-');
            let slug: string = text.toLowerCase().split(' ').join('-');

            while (available) {
                const doc = await model.findOne({slug: slug})
                if(doc){
                    slug = FirstSlug + '-' + nanoid(5)
                }else{
                    available = false
                }
            }
            resolve(slug)
        }catch (e) {
            reject(e.message)
        }

    })

}

export default slugGenerator