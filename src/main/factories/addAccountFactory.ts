import { DbAddAccount } from "../../data/usecases/DbAddAccount";
import { TypeormAccountRepository } from "../../infra/orm/repositories/accountRepository";
import AddAccountController from "../../presentation/controllers/addAccount";
import { Controller } from "../../presentation/protocols/controller";
import { YupDateValidator } from "../../presentation/utils/yup/dateValidator";
import { YupFullnameValidator } from "../../presentation/utils/yup/fullnameValidator";


export const addAccountFactory = (): Controller => {
    const nameValidator = new YupFullnameValidator();
    const dateValidator = new YupDateValidator();

    const addAccountRepository = new TypeormAccountRepository();
    const dbAddAccount = new DbAddAccount(addAccountRepository);

    const addAccount = new AddAccountController(nameValidator, dateValidator, dbAddAccount);
    return addAccount;
}