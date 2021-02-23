import express from 'express'
import UserRoutes from '../../../modules/User/routes/UserRoutes';
const routes = express.Router()

routes.use('/users',UserRoutes);
export default routes;