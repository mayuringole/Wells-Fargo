import { AbstractControl } from "@angular/forms";

export function maleSalaryValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && control.value < 10000) {
        return { 'salaryRange': true };
    }
    return null;
}
export function femaleSalaryValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && control.value < 20000) {
        return { 'salaryRange': true };
    }
    return null;
}