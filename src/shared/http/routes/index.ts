import express from 'express'
import SurveyRoutes from '../../../modules/Survey/routes/SurveyRoutes';
import UserRoutes from '../../../modules/User/routes/UserRoutes';
const routes = express.Router()



routes.use('/users',UserRoutes);
routes.use('/survey',SurveyRoutes);
export default routes;