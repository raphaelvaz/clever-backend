
export default class SignUpController {
    handle(httpRequest: any): any {
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
    }
}