import { FullNameValidator } from "../../protocols/fullnameValidator";

export class YupFullnameValidator implements FullNameValidator {
    isValid(date: string): boolean {
        return true;
    }
}