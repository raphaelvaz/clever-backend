import { getRepository } from "typeorm";
import { AccountRepository } from "../../../data/protocols/AccountRepository";
import { Account } from "../../../domain/entities/account";
import { AccountRequestData } from "../../../domain/usecases/addAccount";
import { Account as OrmAccount } from '../models/account'

export class TypeormAccountRepository implements AccountRepository {
    async exists({ name, birthDate }: AccountRequestData): Promise<Account | undefined> {
        const accountRepository = getRepository(OrmAccount);
        const checkIfExists = await accountRepository.findOne({
            where: { name, birth: new Date(birthDate) },
        })
        if (checkIfExists) return checkIfExists;
        return undefined;
    }

    async add({ name, birthDate }: AccountRequestData): Promise<Account> {
        const accountRepository = getRepository(OrmAccount);

        const account = accountRepository.create({ name, birth: birthDate })

        await accountRepository.save(account);

        return account
    }

    async findById(id: string): Promise<boolean> {
        const accountRepository = getRepository(OrmAccount);
        const checkIfExists = await accountRepository.findOne({
            where: { id },
        })
        if (checkIfExists) return true;
        return false;
    }
}