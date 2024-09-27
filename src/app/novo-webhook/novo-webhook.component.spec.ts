import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoWebhookComponent } from './novo-webhook.component';

describe('NovoWebhookComponent', () => {
  let component: NovoWebhookComponent;
  let fixture: ComponentFixture<NovoWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoWebhookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
