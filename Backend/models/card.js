import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    id : String,
    Name: String,
    img: Image,
    Discription: String,
    price: string
  });
  
  const User = mongoose.model('User', userSchema);
  export default User;
//   app.use(bodyParser.json());