import app from "./app.js";


//port
const PORT = process.env.PORT || 4000


 
//server 
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})