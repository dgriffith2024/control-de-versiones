import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSelectComponent } from './prueba-select.component';

describe('PruebaSelectComponent', () => {
  let component: PruebaSelectComponent;
  let fixture: ComponentFixture<PruebaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
