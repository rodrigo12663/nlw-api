import { getCustomRepository } from "typeorm";
import Survey from "../entities/Survey";
import { SurveyReporsitory } from "../repositories/SurveyReporsitory";

interface IRequest{
    title: string;
    description: string;
}

export default class ListSurveyServices{
    async execute({title,description}:IRequest): Promise<Survey>{
        const surveyReporsitory = getCustomRepository(SurveyReporsitory);

        const survey = surveyReporsitory.create({title,description});
        await surveyReporsitory.save(survey);
        return survey;

    }
}