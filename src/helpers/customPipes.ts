import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'striphtml'})
export class StripHtmlPipe implements PipeTransform {
    transform(s: any): any {
        // replace html tags
        if(typeof s === 'string' || s instanceof String) return s.replace(/<.*?>/g, '');
    }
}

@Pipe({ name: 'getMonogramme'})
export class MonogrammePipe implements PipeTransform {
    transform(value: any): any {
        if(typeof value === 'string' || value instanceof String) return value.split(' ')[0].charAt(0) + value.split(' ')[1].charAt(0);
        else return '?!';
    }
}
