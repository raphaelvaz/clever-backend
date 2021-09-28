import { DbAddAccount } from "../../data/usecases/DbAddAccount";
import { SqliteAccountRepository } from "../../infra/db/sqlite/repositories/accountRepository";
import AddAccountController from "../../presentation/controllers/addAccount";
import { Controller } from "../../presentation/protocols/controller";
import { YupDateValidator } from "../../presentation/utils/yup/dateValidator";
import { YupFullnameValidator } from "../../presentation/utils/yup/fullnameValidator";


export const addAccountFactory = (): Controller => {
    const nameValidator = new YupFullnameValidator();
    const dateValidator = new YupDateValidator();

    const addAccountRepository = new SqliteAccountRepository();
    const dbAddAccount = new DbAddAccount(addAccountRepository);

    const addAccount = new AddAccountController(nameValidator, dateValidator, dbAddAccount);
    return addAccount;
}