import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() mydate = new Date();
  @Input() h = this.mydate.getHours();
  @Input() m = this.mydate.getMinutes();
  @Input() s = this.mydate.getSeconds();
  @Input() clock:any;
  
// myClock() {
//     let date = new Date();
//     let h = date.getHours();
//     // h = (h < 10) ? "0" + h : h;
//     let m = date.getMinutes();
//     // m = (m < 10) ? "0" + m : m
//     let s = date.getSeconds();
//     // s = (s < 10) ? "0" + s : s;
//     this;this.clock = this.h + ':' + this.m + ":" + this.s;
// }


  constructor() { }

  ngOnInit():void{
    const obs$ = interval(1000)
    obs$.subscribe((d)=>{
      this.s = d
      if(this.s > 60){
        this.s = 0
      }
    })
  }

}
