import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactformdemoComponent } from './reactformdemo.component';

describe('ReactformdemoComponent', () => {
  let component: ReactformdemoComponent;
  let fixture: ComponentFixture<ReactformdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactformdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
