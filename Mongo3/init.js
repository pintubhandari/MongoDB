const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then( () => {
        console.log("connection successful");
    })
    .catch( (err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
    from: "riya",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date()
},
{
    from: "seemu",
    to: "motu",
    msg: "mam has called you to school",
    created_at: new Date(),
},
{
    from: "sonu",
    to: "khilu",
    msg: "i don't have money",
    created_at: new Date(),
},
{
    from: "rupali",
    to: "everyone",
    msg: "i have some mangoes",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);