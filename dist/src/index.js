"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookStoreRouter_1 = __importDefault(require("../router/bookStoreRouter"));
const PORT = process.env.port || 4044;
const app = (0, express_1.default)();
require("../config/db");
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "BookStore Server is Up"
    });
});
app.use("/server", bookStoreRouter_1.default);
app.listen(PORT, () => {
    console.log(`BookStore server is up and running on PORT:${PORT}`);
});
