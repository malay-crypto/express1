const bcrypt = require("bcrypt");
express=require('express')
cors=require('cors')
app = express()
mongoose=require('mongoose')
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static('uploads'))
multer=require('multer')
jwt=require('jsonwebtoken')


const sch = new mongoose.Schema(
    { name: String, price: Number, category: String },);

const sch2 = new mongoose.Schema(
    { username: String, password: String },);

const Product = mongoose.model('xxxx', sch,'Product');
const User = mongoose.model('yy', sch2,'User');

mongoose.connect("mongodb+srv://malay:malay12345@cluster0.oqbhjju.mongodb.net/ecommerce3?retryWrites=true&w=majority&appName=Cluster0"
,
    {
        serverSelectionTimeoutMS: 5000,   // quick fail if cannot connect
        socketTimeoutMS: 45000,           // keep sockets open
        ssl: true,
        family: 4,
        tlsAllowInvalidHostnames: false,
        minPoolSize: 1,
        maxPoolSize: 10
    }
);

app.get("/", async (req, res) => {


        let r=await  Product.find()
        res.send(r)



})

app.listen(3000,()=>{console.log("Server started on port 3000")})


app.post('/add',async (req,res)=>{

    console.log(req.body)
    await  Product.create(req.body)
    res.send('success')
})

app.delete('/delete/:id',async (req,res)=>{

            console.log('id is : ',req.params)
    await Product.findByIdAndDelete(req.params.id)
    res.send('success')


})

app.put('/update/:id',async (req,res)=>{

    console.log(req.body)
    await Product.findByIdAndUpdate(req.params.id,req.body)
    res.send('success')
})


app.get("/search", async (req, res) => {

    console.log('query=',req.query)

    let n=req.query.pname
    query={}
    if(n){
        query.name={'$regex':n,'$options':'i'}

    }

    let cat=req.query['cat[]']

    if( cat &&  !Array.isArray(cat)){
        cat = [cat]
    }

    if(cat){
        query.category = {'$in':cat}
    }


    if(Object.keys(query).length > 0){
        let r=await  Product.find(query)
        console.log(r)
        res.send(r)
    }


})

app.post('/register',async (req,res)=>{


    console.log(req.body)
    let {username,password}=  req.body
     let hashed_password= await bcrypt.hash(password,10)
    await User.create({username:username,password:hashed_password})
    res.send('success')
})

app.post('/login',async (req,res)=>{


    console.log(req.body)
    let {username,password}=  req.body
     let user=await User.findOne({username:username})
    let r=await  bcrypt.compare(password,user.password)
    if (r)
    {
        let token=jwt.sign(username,'123')
        res.send({ username:username, token:token,message:`${username} has been logged in`})
    }
    else
        res.send('fail')

})