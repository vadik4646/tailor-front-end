import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toImageUrl'
})
export class ToImageUrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return 'Pipe ' + value;
  }

}
