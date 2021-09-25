import { Account } from "../entities/account";

export interface AccountRequestData {
    name: string
    birthDate: Date
}


export interface AddAccount {
    add(accountData: AccountRequestData): Promise<Account>
}