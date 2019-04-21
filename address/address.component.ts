import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  @Input() parentForm: FormGroup;
  childAddress: FormGroup;
  constructor() { }

  ngOnInit() {
    this.childAddress = new FormGroup({
      address: new FormControl('', Validators.required)
    });
    this.parentForm.addControl('addressGroup', this.childAddress);
  }
}
