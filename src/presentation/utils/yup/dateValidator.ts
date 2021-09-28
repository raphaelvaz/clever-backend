import { DateValidator } from "../../protocols/dateValidator";


export class YupDateValidator implements DateValidator {
    isValid(date: string): boolean {
        return true;
    }
}