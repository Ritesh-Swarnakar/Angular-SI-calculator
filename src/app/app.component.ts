import { Component, VERSION } from '@angular/core';
import { SicService } from './sic.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  SI: number
  A: number 
  P:number
  R : number
   T: number

  constructor(public sic:SicService ){}
  
  ngOnInit(){
    this.SI= this.sic.onClick(this.P, this.R , this.T)
    this.A = this.SI+this.P
  }

  
  
 }




