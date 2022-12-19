import mongoose from "mongoose";

interface bookStore{
    author:string;
    title:string;
    category:string;
    summary:string;
    views:[];
    ISBN:string;
    coverImage:string;
    authorImage:string;
}

interface iBookStore extends bookStore, mongoose.Document{};

const bookStoreSchema = new mongoose.Schema({
    author:String,
    title:String,
    category:String,
    summary:String,
    views:[],
    ISBN:String,
    coverImage:String,
    authorImage:String,
},{timestamps:true});

export default mongoose.model<iBookStore>("bookStore",bookStoreSchema);

