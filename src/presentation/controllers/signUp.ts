import { HttpRequest, HttpResponse } from "../protocols/http"

export default class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.user) {
            return {
                statusCode: 400,
                body: new Error('Missing user param')
            }
        }

        if (!httpRequest.body.birthday) {
            return {
                statusCode: 400,
                body: new Error('Missing birthday param')
            }
        }

        return {
            statusCode: 200,
            body: {},
        }
    }
}