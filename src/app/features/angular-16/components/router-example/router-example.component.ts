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
  // name: string = '';

  // FORMA NUEVA
  @Input() name: string = '';

  ngOnInit(): void {
    // this.name = this.#route.snapshot.queryParams['name'];
    // this.#route.queryParams.subscribe(({ name }) => {
    //   this.name = name;
    // });
  }
}
