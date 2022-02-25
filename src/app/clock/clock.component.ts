import { Component, Input, OnInit } from '@angular/core';

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
  
  // myClock(){
  //   this.h;
  //   this.m;
  //   this.s;
  //   setInterval(myClock(),1000)
  // }


  constructor() { }

  ngOnInit(){
  }

}
