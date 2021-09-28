import { Account } from "../../domain/entities/account";
import { AccountRequestData, AddAccount } from "../../domain/usecases/addAccount";
import { AccountRepository } from "../protocols/AccountRepository";


export class DbAddAccount implements AddAccount {
    constructor(
        private readonly accountRepository: AccountRepository
    ) { }

    async add(accountData: AccountRequestData): Promise<Account> {
        const { name, birthDate } = accountData

        const accountExists = await this.accountRepository.exists({ name, birthDate })

        if (accountExists) {
            const error = new Error()
            error.name = 'exists'
            throw error;
        }

        const account = await this.accountRepository.add({ name, birthDate })

        return account
    }
}