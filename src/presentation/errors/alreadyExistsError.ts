export class AlreadyExistsError extends Error {
    constructor() {
        super('account already exists')
    }
}