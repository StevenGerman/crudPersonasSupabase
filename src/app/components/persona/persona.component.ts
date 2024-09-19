import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/data-model/persona.model';
import { Observable,delay,timeout } from 'rxjs';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  listaPersonas: Persona[] | undefined;

  idEditar : number = 0;

  ngOnInit():void{
    this.getAllPersonas();
  }

  verFormulario: boolean = false;
  nuevo: boolean = true;

  formPersona = this.formB.group({
    perDni: [''],
    perNombreApellido: [''],
    perEmail: [''],
    perFechaNacimiento: ['']
  })

  constructor(
    private formB : FormBuilder,
    private servicioPersonas: PersonasService
  ){}




  getAllPersonas() {
    this.servicioPersonas.getAll().subscribe((res)=> this.listaPersonas = res)
  }


  btnEliminar(id: number): void {
    this.servicioPersonas.eliminar(id).subscribe((error) => console.log(error))
    setTimeout(() => this.getAllPersonas(), 1000);
    console.log(this.listaPersonas);
  }













}
