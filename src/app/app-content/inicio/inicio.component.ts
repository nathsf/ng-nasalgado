import { LocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  show:boolean = false;
  titledefault:string = "";
  LISTA = [
    {id: 1, name:'Alumno 1'},
    {id: 2, name:'Alumno 2'},
    {id: 5, name:'Alumno 3'},
    {id: 3, name:'Alumno 4'},
    {id: 4, name:'Alumno 5'}
  ];

  lista = this.LISTA;
  constructor() { }

  ngOnInit() {
    
  }
  Saludar(){
    this.show = true;
    this.titledefault = "Hola Alumno!"

  }
  Salir(){
    this.titledefault = "Bye alumno!"
    this.show = false;
  }

}
