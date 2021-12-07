import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvendemoComponent } from './evendemo.component';

describe('EvendemoComponent', () => {
  let component: EvendemoComponent;
  let fixture: ComponentFixture<EvendemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvendemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvendemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
