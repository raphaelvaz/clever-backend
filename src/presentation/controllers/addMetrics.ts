import { InvalidParamError } from "../errors/invalidParamError";
import { MissingParamError } from "../errors/missingParamError";
import { badRequest } from "../helpers/httpHelper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";


const NUMBER_DAILY_MEASUREMENTS = 6;

export default class AddMetricsController implements Controller {
    constructor() { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { account_id, metrics } = httpRequest.body

        if (!account_id) return badRequest(new MissingParamError('account_id'))

        if (!metrics) return badRequest(new MissingParamError('metrics'))
        //TODO SERA QUE TEM QUE DA MAIS INFORMAÇÃO DO ERRO...
        if (metrics.length !== NUMBER_DAILY_MEASUREMENTS) return badRequest(new InvalidParamError('metrics'))
    }
}