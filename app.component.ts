import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { maleSalaryValidator, femaleSalaryValidator } from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  parentForm: FormGroup;
  list = [{id: 1, value: 'Male'}, {id: 2, value: 'Female'}];
  showValues = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.formBuilder.group ({
      name:['', Validators.required],
      gender:['Male'],
      salary:[, [Validators.required, maleSalaryValidator]]
    });
    console.log(this.parentForm);
  }
  submitForm() {
    console.log('enable');
    console.log(this.parentForm);
    this.showValues = true;
  }

  onSelect() {
  if(this.parentForm.controls['gender'].value === 'Male') {
    this.parentForm.controls['salary'].setValue('');
    this.parentForm.controls['salary'].setValidators(maleSalaryValidator);
  } else {
    this.parentForm.controls['salary'].setValue('');
    this.parentForm.controls['salary'].setValidators(femaleSalaryValidator);
  }
  }
}
