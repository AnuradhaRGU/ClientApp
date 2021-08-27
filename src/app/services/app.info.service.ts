import { Injectable } from '@angular/core';
import { Appkeys } from './app.keys';



@Injectable({ providedIn: 'root' })
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Genomic';
  }

  public get apiBaseUrl() {
 
   return 'http://127.0.0.1:5000/api/v1'

  }

  public get loginUserName() {
    return localStorage.getItem(Appkeys.CURRENT_USER);
  }

}
