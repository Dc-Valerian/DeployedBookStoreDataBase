"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongoose://localhost/BookStore";
const lifeURI = "mongodb+srv://ValerianPedro:atlas-329-databse@cluster0.ngujblg.mongodb.net/bookStore?retryWrites=true&w=majority";
mongoose_1.default.connect(lifeURI);
mongoose_1.default.connection.on("open", () => {
    console.log("BookStore DataBase Connected");
}).once("error", (error) => {
    console.log(`Failed to connect to BookStore dataBase\n ${error}`);
});
