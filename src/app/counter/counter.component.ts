import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count =0

  plus(){
    this.count++
  }
  minus(){
    if(this.count>0){
      this.count--
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }
}
