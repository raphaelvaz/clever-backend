import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from '../errors/missingParamError'
import { badRequest, successRequest } from "../helpers/httpHelper"
import { Controller } from "../protocols/controller"

export default class SignUpController implements Controller {
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