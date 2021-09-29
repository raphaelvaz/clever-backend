
export interface MetricsRepository {
    exists: (accountData: AccountRequestData) => Promise<Boolean>
    add: (accountData: AccountRequestData) => Promise<Account>
}