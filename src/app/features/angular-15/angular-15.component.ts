import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Angular17Component } from '../angular-17/angular-17.component';

@Component({
  selector: 'app-angular-15',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, Angular17Component],
  templateUrl: './angular-15.component.html',
  styleUrl: './angular-15.component.css',
})
export class Angular15Component {
  showSection: boolean = true;
}
