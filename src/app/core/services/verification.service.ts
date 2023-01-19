import { Injectable } from '@angular/core';


@Injectable()
export class VerificationService {

  constructor() {

  }

  verifyField(field :string ) {
    return !!field
  }

  verifyObj(obj : {}  , typelog = 'log') {

    let tbindex : number[] = [];
    let count = 0;

    Object.values(obj).forEach((value,index)=>{
      if(!value) {
        count  = count + 1 ;
        tbindex.push(index);
      }
    })
    return  typelog == 'log' ? {index : tbindex , count } : {count};

  }


}
