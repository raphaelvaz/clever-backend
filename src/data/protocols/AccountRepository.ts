import { Account } from "../../domain/entities/account";
import { AccountRequestData } from "../../domain/usecases/addAccount";


export interface AccountRepository {
    exists: (accountData: AccountRequestData) => Promise<Boolean>
    add: (accountData: AccountRequestData) => Promise<Account>
    findById: (id: string) => Promise<Boolean>
}