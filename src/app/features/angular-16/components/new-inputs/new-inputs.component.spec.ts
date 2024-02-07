import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputsComponent } from './new-inputs.component';

describe('NewInputsComponent', () => {
  let component: NewInputsComponent;
  let fixture: ComponentFixture<NewInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInputsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
