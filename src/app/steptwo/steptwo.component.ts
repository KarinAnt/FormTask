import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit {
  creditCardList=[];
  constructor() { }

  ngOnInit() {
  }
  addCardList(){
    this.creditCardList.push(1);
  }
}
