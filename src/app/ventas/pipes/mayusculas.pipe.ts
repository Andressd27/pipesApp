import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string, buleano?: boolean): string {
        return ( buleano ) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}