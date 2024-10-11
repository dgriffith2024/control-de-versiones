import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  holaFunction(){
    const arregloSaludos = ['hola', 'saludos'];

    const test = arregloSaludos.filter(item => item === 'hola');
    console.log(test);
  }

}
