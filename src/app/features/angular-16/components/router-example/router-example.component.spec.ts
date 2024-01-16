import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterExampleComponent } from './router-example.component';

describe('RouterExampleComponent', () => {
  let component: RouterExampleComponent;
  let fixture: ComponentFixture<RouterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
