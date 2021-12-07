import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdemoComponent } from './matdemo.component';

describe('MatdemoComponent', () => {
  let component: MatdemoComponent;
  let fixture: ComponentFixture<MatdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
