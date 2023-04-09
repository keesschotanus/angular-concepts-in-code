import { Pipe, PipeTransform } from '@angular/core';

import { Mask } from '../util/mask';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Mask.mask(value, args);
  }

}
