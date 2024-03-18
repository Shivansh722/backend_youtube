import mongoose, { Schema } from "mongoose";
import mongoose from "mongoose-aggregate-paginate-v2"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const videoSchema = new Schema(
    {

        videoFile: {
            type: String,// cloudinary public_id
            required: true,

        },
        thumbnail: {
            type: String,// cloudinary public_id
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,

        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },



    {
        timestamps: true,
    });



export const Video = mongoose.model("Video", videoSchema);

//jwt is a bearer token --> which means that it is a token that is used to authenticate a user