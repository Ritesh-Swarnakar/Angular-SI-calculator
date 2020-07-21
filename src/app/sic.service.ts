import { Injectable } from '@angular/core';

@Injectable()
export class SicService {

  constructor() { }
  SI: number;
 
  onClick(P:number, R : number, T: number){
this.SI = (P*R*T)/100
  return this.SI
}
}
