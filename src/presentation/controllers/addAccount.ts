import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from '../errors/missingParamError'
import { badRequest, successRequest } from "../helpers/httpHelper"
import { Controller } from "../protocols/controller"
import { FullNameValidator } from "../protocols/fullnameValidator"
import { DateValidator } from "../protocols/dateValidator"
import { InvalidParamError } from "../errors/invalidParamError"
import { AddAccount } from "../../domain/usecases/addAccount"

export default class AddAccountController implements Controller {
    constructor(
        private readonly nameValidator: FullNameValidator,
        private readonly dateValidator: DateValidator,
        private readonly addAccount: AddAccount,
    ) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { userName, birthDate } = httpRequest.body

        if (!userName) {
            return badRequest(new MissingParamError('User'))
        }

        if (!birthDate) {
            return badRequest(new MissingParamError('Birth date'))
        }
        //VALIDAR SE É UMA STRING...
        //TEM QUE SER UM NOME VALIDO...
        const isValidUser = this.nameValidator.isValid(userName)

        if (!isValidUser) {
            return badRequest(new InvalidParamError('User'))
        }
        //TEM QUE SER UMA DATA DE NASCIMENTO VALIDA...
        const isValidDate = this.dateValidator.isValid(birthDate)

        if (!isValidDate) {
            return badRequest(new InvalidParamError('Birth date'))
        }

        const account = await this.addAccount.add(httpRequest.body)

        // /^[a-zA-Z'- ]+$/
        // /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([12][0-9]{3})$/
        //FAZER TRY CATCH

        return successRequest(account)
    }
}