import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-new-inputs',
  standalone: true,
  imports: [],
  templateUrl: './new-inputs.component.html',
  styleUrl: './new-inputs.component.css',
})
export class NewInputsComponent {
  @Input({ required: true }) color: 'primary' | 'secondary' = 'primary';

  @Input({ transform: doubleValue }) amount: number = 0;

  @Input({ transform: booleanAttribute }) required: boolean = false;
}

function doubleValue(value: number) {
  return value * 10;
}
