
import { Router } from 'express'
import SurveyController from '../controllers/SurveyController';


const userRoutes = Router();
const surveyController = new SurveyController;

userRoutes.post('/',surveyController.create);
userRoutes.get('/',surveyController.show);

export default userRoutes;