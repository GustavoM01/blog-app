import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CustomValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  careers: string[];
  registerForm: FormGroup;
  name: FormControl;
  email: FormControl;
  age: FormControl;
  career: FormControl;
  password: FormControl;
  passwordConfirmation: FormControl;


  constructor() { 
    this.careers = ['photographer', 'customer service', 'art director', 'programmer', 'actor'];
    this.name = new FormControl('', [ Validators.required, CustomValidator.nameValidator ]);
    this.email = new FormControl('', [ Validators.required, Validators.email ]);
    this.age = new FormControl('', [ Validators.required, CustomValidator.ageValidator(1, 99) ]);
    this.career = new FormControl('', [ Validators.required ]);
    this.password = new FormControl('', [ Validators.required, Validators.minLength(8) ]);
    this.passwordConfirmation = new FormControl('', [ Validators.required, Validators.minLength(8) ])

    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      age: this.age,
      career: this.career,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }, [CustomValidator.checkPassword])
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Creating user');
    console.log(this.registerForm.value);
    console.log(this.name.value);
  }

}
