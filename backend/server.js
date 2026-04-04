import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect('mongodb://localhost:27017/formValidation')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  // User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Register route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/login',async (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email,password});
    if(user){
        res.json({success:true, username:user.username});
    }else{
      res.json({success:false,message:"Invalid email or password"})
    }
});

app.post('/api/signUp', async (req, res) => {
  const { username, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.json({ success: false, message: 'Email already registered.' });
  }

  const newUser = new User({ username, email, password });
  await newUser.save();

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log('Server started on port 5000 listening on http://localhost:5000');
});