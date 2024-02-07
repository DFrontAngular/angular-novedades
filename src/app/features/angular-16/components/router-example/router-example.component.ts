import { NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewInputsComponent } from '../new-inputs/new-inputs.component';

@Component({
  selector: 'app-router-example',
  standalone: true,
  templateUrl: './router-example.component.html',
  styleUrl: './router-example.component.css',
  imports: [NgIf, NewInputsComponent],
})
export class RouterExampleComponent implements OnInit {
  // FORMA ANTIGUA
  #route = inject(ActivatedRoute);
  oldName: string = '';

  // ACCEDER DE MANERA ESTÁTICA
  @Input() name: string = '';

  // ESCUCHANDO A LOS CAMBIOS, SI OCURRIERA UN CAMBIO DE RUTA DENTRO DEL MISMO COMPONENTE
  // @Input() set name(value: string) {
  //   this.value = value;
  // }

  value = '';

  ngOnInit(): void {
    // ACCEDER DE MANERA ESTÁTICA
    this.oldName = this.#route.snapshot.queryParams['name'];

    // ESCUCHANDO A LOS CAMBIOS, SI OCURRIERA UN CAMBIO DE RUTA DENTRO DEL MISMO COMPONENTE
    // this.#route.queryParams.subscribe(({ name }) => {
    //   this.oldName = name;
    // });
  }
}
