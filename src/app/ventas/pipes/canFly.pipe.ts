import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})
export class canFlyPipe implements PipeTransform {
    transform(value: Boolean): String {
        return ( value ) ? 'Vuela' : 'No vuela';
    }
}
