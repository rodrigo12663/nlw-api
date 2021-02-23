import express from 'express'
const routes = express.Router()


routes.get("/",(request,response) => {
    response.json("Hello word");
})
routes.post("/",(request,response) => {
    return response.json({message:"dados foram salvos com sucesso"});
})
export default routes;