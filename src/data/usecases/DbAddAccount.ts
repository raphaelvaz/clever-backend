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
            return accountExists;
        }

        const account = await this.accountRepository.add({ name, birthDate })

        return account
    }
}