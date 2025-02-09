import mongoose from "mongoose";
import { v4 } from "uuid";


const User = mongoose.model("User", {
    id: {
        type: mongoose.Schema.Types.UUID,
        default: () => v4(),
        required: true
    },
    username: {
        type: String,
        required: true
    },
    
})

export default User