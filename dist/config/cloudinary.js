"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dbpcptmco",
    api_key: "381517299141291",
    api_secret: "6xRX67qVF2sTaQxGTaGAA1C73rc",
    secure: true,
});
exports.default = cloudinary_1.v2;
