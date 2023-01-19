import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class StorageService {

  constructor(){}

  // set a value to the storage
  set(key : string , value  : any ) {
    localStorage.setItem(key, value);
  }

  // get a value from the storage
  get(key :string) {
    return of(localStorage.getItem(key));
  }

  // get the list from localstorage
  async gets(keys : string[]) {
    let values  = [];
    keys.forEach((item)=>{
      this.get(item).subscribe((storageResult)=>{
        values.push(storageResult)
      })
    })
    return await values;
  }

  //set array to localStorage
  sets(keys : {key : string , value :any }[]) {
    keys.forEach((element)=>{
      this.set(element.key, element.value)
    })
  }

}
