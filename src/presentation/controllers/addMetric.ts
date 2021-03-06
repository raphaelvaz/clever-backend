import { AddMetrics } from "../../domain/usecases/addMetric";
import { AlreadyExistsError } from "../errors/alreadyExistsError";
import { InvalidParamError } from "../errors/invalidParamError";
import { MissingParamError } from "../errors/missingParamError";
import { NotFoundError } from "../errors/notFoundError";
import { ServerError } from "../errors/serverError";
import { badRequest, serverError, successRequest } from "../helpers/httpHelper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

interface HttpRequestBody {
    account_id: string;
    metrics: Metric[];
}

interface Metric {
    date: Date;
    bpm: number;
    pamin: number;
    pamax: number;
}

const NUMBER_DAILY_MEASUREMENTS = 6;
const HOURS_AVAILABLE = ['02:00:00', '06:00:00', '10:00:00', '14:00:00', '18:00:00', '22:00:00']

export default class AddMetricsController implements Controller {
    constructor(
        private readonly addMetrics: AddMetrics,
    ) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { account_id, metrics } = httpRequest.body as HttpRequestBody

            if (!account_id) return badRequest(new MissingParamError('account_id'))

            if (!metrics) return badRequest(new MissingParamError('metrics'))
            //TODO TER MAIS INFORMAÇÃO DO ERRO...
            if (metrics.length !== NUMBER_DAILY_MEASUREMENTS) return badRequest(new InvalidParamError('metrics'))
            //new Date("12/12/1996 07:05:45").toLocaleTimeString() === '07:05:45'
            metrics.forEach((metric: Metric) => {
                if (!HOURS_AVAILABLE.includes(new Date(metric.date).toLocaleTimeString()))
                    return badRequest(new InvalidParamError('metric date'))
            })
            // TODO CHECK UUID...
            // TODO DO YUP VALIDATIONS
            // TODO VALIDAR DADOS DE SAUDE...
            const createdMetrics = await this.addMetrics.add({ account_id, metrics });

            return successRequest(createdMetrics);
        } catch (err) {
            if ((err as Error).name === 'not found') {
                return badRequest(new NotFoundError('account not found'))
            }
            console.log(err)
            return serverError(new ServerError())
        }

    }
}