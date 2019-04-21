import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  @Input() parentForm: FormGroup;
  childContact: FormGroup;
  constructor() { }

  ngOnInit() {
    this.childContact = new FormGroup({
      contact: new FormControl('', Validators.required)
    });
    this.parentForm.addControl('contactGroup', this.childContact);
  }
}
