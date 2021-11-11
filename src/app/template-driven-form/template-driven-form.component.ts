import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild("form")
  form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("the form data - " + this.form.value);
    console.log("the form data - ",this.form.value);
    console.log("the form data - ",this.form.value.email);
    console.log("the form data - ",this.form.value.password);
  }

}
