import { Op } from 'sequelize'
import { AccountRepository } from '../../../../data/protocols/AccountRepository';
import { Account } from '../../../../domain/entities/account';
import { AccountRequestData } from "../../../../domain/usecases/addAccount";
import { Account as ORMAccount } from "../models/account";


export class SqliteAccountRepository implements AccountRepository {
    async exists({ name, birthDate }: AccountRequestData): Promise<boolean> {
        const rawData = await ORMAccount.findOne({
            where: {
                [Op.and]: [
                    { name },
                    { birthDate }
                ]
            }
        })

        if (rawData) return true;
        return false;
    }

    async add({ name, birthDate }: AccountRequestData): Promise<Account> {
        const rawData = await ORMAccount.create({ name, birthDate })

        const account: Account = Object.assign({ ...rawData.toJSON() })

        return account
    }
}