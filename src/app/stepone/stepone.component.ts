import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {
  nextbutton = false;
  stepOne = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    confirmPassword: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  errors(string){
    this.stepOne.controls.string
  }
  next(){
    this.nextbutton = true
  }
}
