import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgforComponent } from './nested-ngfor.component';

describe('NestedNgforComponent', () => {
  let component: NestedNgforComponent;
  let fixture: ComponentFixture<NestedNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
