const mongoose = require("mongoose");

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then( () => {
        console.log("connection successful");
    })
    .catch( (err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name: "Motu"})
.then( (res) => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
});

// User.findByIdAndUpdate("6824189f5dcae61912a11821", {age: 45}, {new: true})
//     .then( (res) => {
//         console.log(res);
//     })
//     .catch( (err) => {
//         console.log(err);
//     });

// User.findById("6824189f5dcae61912a11821")
//     .then( (res) => {
//         console.log(res);
//     })
//     .catch( (err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Bruce", email: "bruce@yahoo.com", age: 47},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then( (res) => {
//     console.log(res);
// });


// const user2 = new User({
//     name: "Eve",
//     email: "eve@google.com",
//     age: 48,
// });

// user2.save() 
//         .then( (res) => {
//             console.log(res);
//         })
//         .catch( (err) => {
//             console.log(err);
//         });
