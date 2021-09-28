import { HttpResponse } from "../protocols/http";

export const badRequest = (error: Error): HttpResponse => {
    return {
        statusCode: 400,
        body: error
    }
}

export const successRequest = (data: any): HttpResponse => {
    return {
        statusCode: 200,
        body: data,
    }
}

export const serverError = (error: Error): HttpResponse => {
    return {
        statusCode: 500,
        body: error.message,
    }
}