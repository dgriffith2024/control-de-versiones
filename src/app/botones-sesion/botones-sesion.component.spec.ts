import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesSesionComponent } from './botones-sesion.component';

describe('BotonesSesionComponent', () => {
  let component: BotonesSesionComponent;
  let fixture: ComponentFixture<BotonesSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
