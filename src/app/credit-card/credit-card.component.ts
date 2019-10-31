import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() inputTrue: boolean;
  cardNumberbut = false;
  ownerbut = false;
  cwbut = false;
  expirationbut = false;
  card = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(19)]],
    owner: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]],
    cw: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    expiration: ['']
  });
  constructor(private fb: FormBuilder) { 
    console.log(this.inputTrue)
    this.cardNumberbut = this.inputTrue;
    this.ownerbut = this.inputTrue;
    this.cwbut = this.inputTrue;
    this.expirationbut = this.inputTrue;
    console.log(this.cardNumberbut);
  }

  ngOnInit() {
  }
  deleteTrue(elem){
    if(elem == 'cardNumber'){
    this.cardNumberbut = false;
   }else if(elem === 'owner'){
     this.ownerbut = false;
   }else if(elem === 'cw'){
     this.cwbut = false;
   }else if(elem === 'expiration'){
     this.expirationbut = false;
    }
 }
}
