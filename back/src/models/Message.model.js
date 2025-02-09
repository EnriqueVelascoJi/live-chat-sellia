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
    from: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User',
        required: true
    }
})

export default Message