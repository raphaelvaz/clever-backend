import { getRepository } from "typeorm";
import { AccountRepository } from "../../../data/protocols/AccountRepository";
import { Account } from "../../../domain/entities/account";
import { AccountRequestData } from "../../../domain/usecases/addAccount";
import { Account as OrmAccount } from '../models/account'

export class TypeormAccountRepository implements AccountRepository {
    async exists({ name, birthDate }: AccountRequestData): Promise<boolean> {
        const accountRepository = getRepository(OrmAccount);
        const checkIfExists = await accountRepository.findOne({
            where: [{ name }, { birthDate }],
        })

        if (checkIfExists) return true;
        return false;
    }

    async add({ name, birthDate }: AccountRequestData): Promise<Account> {
        const accountRepository = getRepository(OrmAccount);

        const account = accountRepository.create({ name, birthDate })

        await accountRepository.save(account);

        return account
    }
}