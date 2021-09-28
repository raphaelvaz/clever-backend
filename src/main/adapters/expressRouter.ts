import { Controller } from "../../presentation/protocols/controller";
import { Request, Response } from 'express'

export const ExpressAdapter = (controller: Controller) => {
    return async (request: Request, response: Response) => {
        const httpRequest = {
            body: request.body
        }

        const httpResponse = await controller.handle(httpRequest);

        if (httpResponse.statusCode === 200)
            response.status(httpResponse.statusCode).json(httpResponse.body)
        response.status(httpResponse.statusCode).json({ error: httpResponse.body.message })
    }
}