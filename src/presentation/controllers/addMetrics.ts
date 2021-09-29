import { MissingParamError } from "../errors/missingParamError";
import { badRequest } from "../helpers/httpHelper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";



export default class AddMetricsController implements Controller {
    constructor() { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { account_id, metrics } = httpRequest.body

        if (!account_id) return badRequest(new MissingParamError('account_id'))

        if (!metrics) return badRequest(new MissingParamError('metrics'))
    }
}