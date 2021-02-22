
import express from 'express';
const app = express();

app.get("/",(request,response) => {
    response.json("Hello word");
})
app.post("/",(request,response) => {
    return response.json({message:"dados foram salvos com sucesso"});
})

app.listen(3331,()=>{
    console.log("server is running");
})