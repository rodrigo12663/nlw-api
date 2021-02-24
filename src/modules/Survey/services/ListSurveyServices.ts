import { getCustomRepository } from "typeorm";
import Survey from "../entities/Survey";
import { SurveyReporsitory } from "../repositories/SurveyReporsitory";


export default class CreateSurveyServices{
    async execute(): Promise<Survey[]>{
        const surveyReporsitory = getCustomRepository(SurveyReporsitory);
        const surveys =await  surveyReporsitory.find();
        return surveys;

    }
}