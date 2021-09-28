import { Op } from 'sequelize'
import { AccountRequestData } from "../../../../domain/usecases/addAccount";
import { Account as ORMAccount } from "../models/account";


export class SqliteAccountRepository implements AccountRepository {
    async exists({ name, birthDate }: AccountRequestData): Promise<boolean> {
        const rawDAta = await ORMAccount.findOne({
            where: {
                [Op.and]: [
                    { name },
                    { birthDate }
                ]
            }
        })

        if (rawDAta) return true;
        return false;
    }
}