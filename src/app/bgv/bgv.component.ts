import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bgv',
  templateUrl: './bgv.component.html',
  styleUrls: ['./bgv.component.css']
})
export class BgvComponent implements OnInit {
  contactForm !: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.createForm()
   }


  createForm(){
    this.contactForm = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      age: [''],
      address: ['']
    })    
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
  }

}
