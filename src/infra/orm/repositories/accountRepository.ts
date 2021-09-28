import { getRepository } from "typeorm";
import { AccountRepository } from "../../../data/protocols/AccountRepository";
import { AccountRequestData } from "../../../domain/usecases/addAccount";
import { Account } from '../models/account'

export class TypeormAccountRepository implements AccountRepository {
    async exists({ name, birthDate }: AccountRequestData): Promise<boolean> {
        const accountRepository = getRepository(Account);
        const checkIfExists = await accountRepository.findOne({
            where: [{ name }, { birth_date: birthDate }],
        })

        if (checkIfExists) return true;
        return false;
    }
}