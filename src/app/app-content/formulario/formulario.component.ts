import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/User';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
   }
   
  
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastname: new FormControl(this.user.lastname, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      age: new FormControl(this.user.age, [
        Validators.required,
        Validators.min(1)
      ]),
      
    });
  }
  get name() {
    return this.reactiveForm.get('name')!;
  }

  get lastname() {
    return this.reactiveForm.get('lastname')!;
  }

  get age() {
    return this.reactiveForm.get('age')!;
  }

  public guardar(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.reactiveForm.value;
    console.info('Nombre:', this.user.name);
    console.info('Apellidos:', this.user.lastname);
    console.info('Edad:', this.user.age);
  }
}
