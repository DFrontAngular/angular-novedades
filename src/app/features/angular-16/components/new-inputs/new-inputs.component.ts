import { NgIf } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-new-inputs',
  standalone: true,
  imports: [NgIf],
  templateUrl: './new-inputs.component.html',
  styleUrl: './new-inputs.component.css',
})
export class NewInputsComponent {
  @Input({ alias: 'name' }) currentName = '';

  @Input({ required: true }) color!: 'primary' | 'secondary';

  @Input({ transform: doubleValue }) amount = 0;

  @Input({ transform: booleanAttribute }) checked = false;
}

function doubleValue(value: number) {
  return value * 10;
}
