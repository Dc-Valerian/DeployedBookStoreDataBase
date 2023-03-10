"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const bookStoreSchema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    category: String,
    summary: String,
    views: [],
    ISBN: String,
    coverImage: String,
    authorImage: String,
}, { timestamps: true });
exports.default = mongoose_1.default.model("bookStore", bookStoreSchema);
