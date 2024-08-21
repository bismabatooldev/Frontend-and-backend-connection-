import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    title:{
    type:String,
},
description:{
    type:String,
   
},
price:{
    type:Number,
},
rating:{
    type:Number,
},
stock:{
    type:Number,

},
brand:{
    type:String,
},
   
    category:{
        type:String,
        
    },
    thumbnail:{
        type:String,
        
    },
   img: {
        type:String,
    }
    
})

const Product = mongoose.model('products', productSchema);

export default Product;