import { Request,Response } from "express";
import CreateSurveyServices from "../services/CreateSurveyServices";
import ListSurveyServices from "../services/ListSurveyServices";

export default class SurveyController{ 
    async  create (req: Request,res:Response){
        const {title,description} = req.body;
        
        const surveyServices = new CreateSurveyServices();
        const survey= await surveyServices .execute({title,description} );
        return res.status(201).json(survey);
    }
    async show (req: Request,res:Response){
      

        const  surveyServices = new ListSurveyServices();
        const  surveys= await  surveyServices.execute();
        return res.status(201).json(surveys);
    }
}
