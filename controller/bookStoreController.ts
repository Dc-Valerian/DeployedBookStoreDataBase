import { Request,response,Response } from "express";
import bookStoreModel from "../model/bookStoreModel";
import cloudinary from "../config/cloudinary";
import path from "path";

const postBook =async (
    request: Request,
    response: Response
    ):Promise<Response> => {
        try {
            const cloudImg = await cloudinary.uploader.upload(request?.file!.path);
            const {author, title, category,summary,views}= request.body;
            const isbn1 = Math.floor(Math.random() * 10000);
            const isbn2 = Math.floor(Math.random() * 10000);
            const isbn3 = Math.floor(Math.random() * 10000);
            const isbn4 = Math.floor(Math.random() * 10000);
            const newBook = await bookStoreModel.create({
                author,
                title,
                category,
                summary,
                views,
                ISBN:`${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
                coverImage:cloudImg.secure_url,
                authorImage:author.charAt(0).toUpperCase(),
            });

            return response.status(202).json({
                message:"Data Successfully uploaded to BookStore",
                data:newBook,
            })
        } catch (error) {
            return response.status(404).json
            ({
                message:"an error occured",
                data: error
            })
        }
    
}
const getAllbooks = async (req: Request, res: Response): Promise<Response> => {
    try {
      const book = await bookStoreModel.find();
      return res.status(200).json({
        message: "all books found",
        data: book,
      });
    } catch (error) {
      return res.status(400).json({
        message: "book not found",
      });
    }
  };
  
  //TO GET JUST ONE BOOK 
  
  const getOneBook = async (req: Request, res: Response): Promise<Response> => {
    try {
      const getOne = await bookStoreModel.findById(req.params.id);
  
      return res.status(201).json({
        message: "Succesfully gotten data",
        data: getOne,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error occured",
        data: error,
      });
    }
  };
  
  const searchBooks = async (req: Request, res: Response): Promise<Response> => {
    try {
      const queryData = req.query;
      const makeSearch = await bookStoreModel.find(queryData);
  
      return res.status(200).json({ message: "Data Found", data: makeSearch });
    } catch (error) {
      return res.status(400).json({
        message: "An error occured",
        data: error,
      });
    }
  };
  
  const myViews = async (req: Request, res: Response): Promise<Response> => {
    try {
      const newView = await bookStoreModel.findByIdAndUpdate(
        req.params.id,
        {
          $push: { views: req.body.ip },
        },
        { new: true }
      );
  
      return res.status(200).json({
        data: newView,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error occured",
        data: error,
      });
    }
  };
  
  export { postBook, getAllbooks, getOneBook, searchBooks, myViews };
  