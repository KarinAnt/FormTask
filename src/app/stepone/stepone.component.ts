import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {
  @Output() nextToStepTwo = new EventEmitter();
  nextStepTwo = true;
  namebut = false;
  emailbut = false;
  passbut = false;
  conpassbut = false;
  stepOne = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    confirmPassword: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  next(){
    this.conpassbut = true;
    this.passbut = true;
    this.emailbut = true;
    this.namebut = true;
    this.nextStepTwo = false;
    if(!this.stepOne.controls.userName.hasError('required') && !this.stepOne.controls.email.hasError('required') && !this.stepOne.controls.email.hasError('pattern') && !this.stepOne.controls.password.hasError('required') && !this.stepOne.controls.password.hasError('minlength') && !this.stepOne.controls.password.hasError('maxlength') && this.stepOne.value.password === this.stepOne.value.confirmPassword){
      this.nextToStepTwo.emit(false); 
    }
  }
  deleteTrue(elem){
     if(elem == 'conpass'){
     this.conpassbut = false;
    }else if(elem === 'pass'){
      this.passbut = false;
    }else if(elem === 'email'){
      this.emailbut = false;
    }else if(elem === 'name'){
      this.namebut = false;
     }
  }
}
