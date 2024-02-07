import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
})
export class SignalExampleComponent implements OnInit {
  // WRITABLE SIGNAL
  count = signal(10);

  // READ-ONLY SIGNAL
  doubleCount = computed(() => this.count() * 2);

  // PODEMOS DEFINIR LOS EFFECTS AQUÍ EN LUGAR DEL CONSTRUCTOR PARA TENER NOMBRES MÁS DESCRIPTIVOS
  countEffect = effect(() => {
    console.log(
      `Effect desde propiedad del componente, count: ${this.count()}`
    );
  });

  constructor() {
    // ACTUARIA DE MANERA SIMILAR A LA SUSCRIPCIÓN EN LOS OBSERVABLES
    effect(
      () => {
        console.log(`Effect desde el contructuro, count: ${this.count()}`);

        // ESTE COMPORTAMIENTO NO ESTÁ PERMITIDO POR DEFECTO, MEJOR UTILIZAR COMPUTED SIGNALS
        // PROBAR A DESCOMENTAR PARA VER EL ERROR EN CONSOLA
        // this.count.set(5);
      }
      // {
      //   allowSignalWrites: true,
      // }
    );
  }

  ngOnInit(): void {}

  changeCount() {
    // Cambio el valor directamente
    this.count.set(15);

    // No podemos realizar cambios de valores en los computed signal, son de sólo lectura
    // this.doubleCount.set(5)

    // Actualizamos el valor dependiendo de su valor previo
    // this.count.update((value) => value + 1);
  }
}
