
export default class SignUpController {
    handle(httpRequest: any): any {
        if (!httpRequest.body.user) {
            return {
                statusCode: 400,
                body: new Error(`Missing user param`)
            }
        }
    }
}