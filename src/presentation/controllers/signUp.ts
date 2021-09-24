import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from '../errors/missingParamError'

export default class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.user) {
            return {
                statusCode: 400,
                body: new MissingParamError('user')
            }
        }

        if (!httpRequest.body.birthday) {
            return {
                statusCode: 400,
                body: new MissingParamError('birthday')
            }
        }

        return {
            statusCode: 200,
            body: {},
        }
    }
}