import mongoose from "mongoose";
import { v4 } from "uuid";


const Message = mongoose.model("Message", {
    id: {
        type: mongoose.Schema.Types.UUID,
        default: () => v4(),
        required: true
    },

    content: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    sender: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User',
        required: true
    },

    timestamp: {
        type: mongoose.Schema.Types.Date,
        default: () => new Date,
        required: true
    }
})

export default Message