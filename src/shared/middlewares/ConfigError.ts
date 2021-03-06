
import { NextFunction, Request, Response } from 'express'
import AppError from '../errors/AppError'

export default class ConfigError {
   async execute (error:Error, request:Request, response:Response, next:NextFunction){
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message
        })
    }
  }
   
}