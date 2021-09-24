import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from '../errors/missingParamError'
import { badRequest, successRequest } from "./helpers/httpHelper"

export default class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.user) {
            return badRequest(new MissingParamError('user'))
        }

        if (!httpRequest.body.birthday) {
            return badRequest(new MissingParamError('birthday'))
        }

        return successRequest({})
    }
}