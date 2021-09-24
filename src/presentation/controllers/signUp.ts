import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from '../errors/missingParamError'
import { badRequest, successRequest } from "../helpers/httpHelper"
import { Controller } from "../protocols/controller"
import { FullNameValidator } from "../protocols/fullnameValidator"

export default class SignUpController implements Controller {
    constructor(
        private readonly nameValidator: FullNameValidator,
    ) { }
    handle(httpRequest: HttpRequest): HttpResponse {
        const { user, birthDate } = httpRequest.body

        if (!user) {
            return badRequest(new MissingParamError('user'))
        }

        if (!birthDate) {
            return badRequest(new MissingParamError('birth date'))
        }
        //VALIDAR SE É UMA STRING...
        //TEM QUE SER UM NOME VALIDO...
        //TEM QUE SER UMA DATA DE NASCIMENTO VALIDA...

        // /^[a-zA-Z'- ]+$/
        // /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([12][0-9]{3})$/


        return successRequest({})
    }
}